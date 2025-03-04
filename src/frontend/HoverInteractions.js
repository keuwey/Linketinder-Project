function updateUI() {
	// Update candidate cards
	const candidates = JSON.parse(localStorage.getItem("candidates") || "[]")
	const container = document.querySelector("#company-profile .row")

	container.innerHTML = candidates.map(candidate => `
        <div class="col-md-4 hover-info" 
             data-info="Education: ${candidate.education.join(", ")} | Experience: ${candidate.experience.join(", ")}"
             onmouseover="showCandidateInfo(this)">
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">Candidate #${candidate.id}</h5>
                    <div class="skills">
                        ${candidate.skills.map(skill => `
                            <span class="skill-tag">${skill}</span>
                        `).join("")}
                    </div>
                </div>
            </div>
        </div>
    `).join("")
}