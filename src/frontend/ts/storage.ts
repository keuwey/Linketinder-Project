import { Candidate } from "./interfaces"

export class StorageHandler {
  static getCandidates(): Candidate[] {
    return JSON.parse(localStorage.getItem("candidates") || "[]")
  }

  static saveCandidate(candidate: Candidate): void {
    const candidates = this.getCandidates()
    candidates.push(candidate)
    localStorage.setItem("candidates", JSON.stringify(candidates))
  }

  static deleteCandidate(id: number): void {
    const filtered = this.getCandidates().filter(c => c.id !== id)
    localStorage.setItem("candidates", JSON.stringify(filtered))
  }

}
