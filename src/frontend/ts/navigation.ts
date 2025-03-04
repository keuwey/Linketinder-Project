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
