import { NavigationManager } from "./navigation"
import { UIHelper } from "./ui"
import { ChartManager } from "./charts"

// Initialize application
NavigationManager.initialize()
UIHelper.initializeHoverEffects()

// Initialize chart
const ctx = document.getElementById("skillsChart") as HTMLCanvasElement
const chartManager = new ChartManager(ctx)

// Form submissions
document.getElementById("candidateForm")?.addEventListener("submit", e => {
  e.preventDefault()
  // Handle form submission
  chartManager.updateChartData()
  UIHelper.updateCandidateList()
})
