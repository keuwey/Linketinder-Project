export class StorageHandler {
    static getCandidates() {
        return JSON.parse(localStorage.getItem("candidates") || "[]");
    }
    static saveCandidate(candidate) {
        const candidates = this.getCandidates();
        candidates.push(candidate);
        localStorage.setItem("candidates", JSON.stringify(candidates));
    }
    static deleteCandidate(id) {
        const filtered = this.getCandidates().filter(c => c.id !== id);
        localStorage.setItem("candidates", JSON.stringify(filtered));
    }
}
