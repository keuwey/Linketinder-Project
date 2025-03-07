export class StorageHandler {
  static getCandidates(): Candidate[] {
    return JSON.parse(localStorage.getItem("candidates") || "[]")
  }

  static saveCandidate(candidate: Candidate): void {
    const candidates = this.getCandidates()
    candidate.id = candidates.length + 1
    candidates.push(candidate)
    localStorage.setItem("candidates", JSON.stringify(candidates))
  }

  static deleteCandidate(id: number): void {
    const filtered = this.getCandidates().filter(c => c.id !== id)
    localStorage.setItem("candidates", JSON.stringify(filtered))
  }
}

export interface Candidate {
  id: number
  name: string
  skills: string[]
  education: string[]
  experience: string[]
}

export interface Company {
  id: number
  name: string
  industry: string
  vacancies: string[]
}

export class NavigationManager {
  static initialize(): void {
    document.addEventListener("DOMContentLoaded", () => {
      this.showSection("candidate-register")
      this.setupNavigation()
    })
  }

  private static setupNavigation(): void {
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault()
        const sectionId = link.getAttribute("href")!.substring(1)
        this.showSection(sectionId)
      })
    })
  }

  static showSection(sectionId: string): void {
    document.querySelectorAll("section").forEach(section => {
      section.style.display = "none"
    })
    document.getElementById(sectionId)!.style.display = "block"
  }
}

export class UIHelper {
  static initializeHoverEffects(): void {
    document.querySelectorAll(".hover-info").forEach(element => {
      element.addEventListener("mouseover", this.handleHover)
    })
  }

  private static handleHover(event: Event): void {
    const target = event.currentTarget as HTMLElement
    // @ts-ignore
    const info = target.dataset.info
  }

  static updateCandidateList(): void {
    const container = document.querySelector("#company-profile .row")!
    const candidates = StorageHandler.getCandidates()

    container.innerHTML = candidates
      .map(
        candidate => `
      <div class="col-md-4 hover-info" 
           data-info="Education: ${candidate.education.join(", ")} | Experience: ${candidate.experience.join(", ")}">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Candidate #${candidate.id}</h5>
            <div class="skills">
              ${candidate.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("")

    this.initializeHoverEffects()
  }
}

// Initialize application
NavigationManager.initialize()
UIHelper.updateCandidateList()
UIHelper.initializeHoverEffects()

// Form submissions
document.getElementById("candidateForm")?.addEventListener("submit", e => {
  e.preventDefault()

  const form = e.target as HTMLFormElement
  const name = (form.querySelector('input[name="name"]') as HTMLInputElement).value
  const skills = (form.querySelector('input[name="skills"]') as HTMLInputElement).value.split(',')
  const education = (form.querySelector('input[name="education"]') as HTMLInputElement).value.split(',')
  const experience = (form.querySelector('input[name="experience"]') as HTMLInputElement).value.split(',')

  const newCandidate: Candidate = {
    id: 0,
    name,
    skills,
    education,
    experience
  }

  StorageHandler.saveCandidate(newCandidate)
  UIHelper.updateCandidateList()
  form.reset()
})
