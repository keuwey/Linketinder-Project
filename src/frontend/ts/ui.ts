// @ts-ignore
import { Candidate } from "./interfaces"
import { StorageHandler } from "./storage"

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
           data-info="Education: ${candidate.education.join(", ")}">
        <!-- Card content -->
      </div>
    `
      )
      .join("")

    this.initializeHoverEffects()
  }
}
