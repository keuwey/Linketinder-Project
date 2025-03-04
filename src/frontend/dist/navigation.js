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
