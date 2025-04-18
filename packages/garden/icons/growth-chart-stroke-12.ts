import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGrowthChartStroke12Icon],svg[garden-growth-chart-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1v10H1V1zM1 0a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm6.658 3.75h2.07c.15 0 .272.122.272.273v2.069a.273.273 0 0 1-.466.192l-.68-.68l-2 2a.5.5 0 0 1-.708 0L5 6.457L2.854 8.604a.5.5 0 1 1-.708-.708l2.5-2.5a.5.5 0 0 1 .708 0L6.5 6.543l1.646-1.647l-.68-.68a.273.273 0 0 1 .192-.466"></svg:path>`,
})
export class GardenGrowthChartStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
