import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGrowthChartFill12Icon],svg[garden-growth-chart-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.75 0A.75.75 0 0 0 0 .75v10.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V.75a.75.75 0 0 0-.75-.75zm8.979 3.75c.15 0 .273.122.273.273v2.069a.273.273 0 0 1-.466.192l-.682-.681l-2 2a.5.5 0 0 1-.708 0L5 6.458L2.854 8.604a.5.5 0 1 1-.708-.708l2.5-2.5a.5.5 0 0 1 .708 0L6.5 6.543l1.647-1.647l-.68-.68a.273.273 0 0 1 .193-.466z"></svg:path>`,
})
export class GardenGrowthChartFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
