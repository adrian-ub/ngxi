import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGrowthChartStroke16Icon],svg[garden-growth-chart-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.636 5H9.878a.364.364 0 0 0-.257.62l1.025 1.026L8.5 8.793L6.854 7.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L6.5 8.207l1.646 1.647a.5.5 0 0 0 .708 0l2.5-2.5l1.025 1.025c.23.23.621.067.621-.257V5.364A.364.364 0 0 0 12.636 5M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm1 0v14h14V1z"></svg:path>`,
})
export class GardenGrowthChartStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
