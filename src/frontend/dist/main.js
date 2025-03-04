var _a;
import { NavigationManager } from "./navigation";
import { UIHelper } from "./ui";
import { ChartManager } from "./charts";
NavigationManager.initialize();
UIHelper.initializeHoverEffects();
const ctx = document.getElementById("skillsChart");
const chartManager = new ChartManager(ctx);
(_a = document.getElementById("candidateForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", e => {
    e.preventDefault();
    chartManager.updateChartData();
    UIHelper.updateCandidateList();
});
