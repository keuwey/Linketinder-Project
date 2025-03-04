import { Chart, registerables } from "chart.js";
import { StorageHandler } from "./storage";
export class ChartManager {
    constructor(ctx) {
        Chart.register(...registerables);
        this.chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [],
                datasets: [{
                        label: "Candidates per Skill",
                        data: [],
                        backgroundColor: "rgba(52, 152, 219, 0.7)"
                    }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (context) => `Candidates: ${context.formattedValue}`
                        }
                    }
                }
            }
        });
    }
    updateChartData() {
        const candidates = StorageHandler.getCandidates();
        const skillCounts = candidates.reduce((acc, candidate) => {
            candidate.skills.forEach(skill => { acc[skill] = (acc[skill] || 0) + 1; });
            return acc;
        }, {});
        this.chart.data.labels = Object.keys(skillCounts);
        this.chart.data.datasets[0].data = Object.values(skillCounts);
        this.chart.update();
    }
}
