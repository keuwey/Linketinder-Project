var _a;
export class StorageHandler {
    static getCandidates() {
        return JSON.parse(localStorage.getItem("candidates") || "[]");
    }
    static saveCandidate(candidate) {
        const candidates = this.getCandidates();
        candidate.id = candidates.length + 1;
        candidates.push(candidate);
        localStorage.setItem("candidates", JSON.stringify(candidates));
    }
    static deleteCandidate(id) {
        const filtered = this.getCandidates().filter(c => c.id !== id);
        localStorage.setItem("candidates", JSON.stringify(filtered));
    }
}
export class NavigationManager {
    static initialize() {
        document.addEventListener("DOMContentLoaded", () => {
            this.showSection("candidate-register");
            this.setupNavigation();
        });
    }
    static setupNavigation() {
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const sectionId = link.getAttribute("href").substring(1);
                this.showSection(sectionId);
            });
        });
    }
    static showSection(sectionId) {
        document.querySelectorAll("section").forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(sectionId).style.display = "block";
    }
}
export class UIHelper {
    static initializeHoverEffects() {
        document.querySelectorAll(".hover-info").forEach(element => {
            element.addEventListener("mouseover", this.handleHover);
        });
    }
    static handleHover(event) {
        const target = event.currentTarget;
        const info = target.dataset.info;
    }
    static updateCandidateList() {
        const container = document.querySelector("#company-profile .row");
        const candidates = StorageHandler.getCandidates();
        container.innerHTML = candidates
            .map(candidate => `
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
    `)
            .join("");
        this.initializeHoverEffects();
    }
}
NavigationManager.initialize();
UIHelper.updateCandidateList();
UIHelper.initializeHoverEffects();
(_a = document.getElementById("candidateForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", e => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('input[name="name"]').value;
    const skills = form.querySelector('input[name="skills"]').value.split(',');
    const education = form.querySelector('input[name="education"]').value.split(',');
    const experience = form.querySelector('input[name="experience"]').value.split(',');
    const newCandidate = {
        id: 0,
        name,
        skills,
        education,
        experience
    };
    StorageHandler.saveCandidate(newCandidate);
    UIHelper.updateCandidateList();
    form.reset();
});
