import { StorageHandler } from "./storage";
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
           data-info="Education: ${candidate.education.join(", ")}">
        <!-- Card content -->
      </div>
    `)
            .join("");
        this.initializeHoverEffects();
    }
}
