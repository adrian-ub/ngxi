import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRadarIcon],svg[tdesign-chart-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .764L23.186 8.89l-4.273 13.15H5.087L.814 8.89zM3.548 10.83l2.61 8.035l4.224-5.814zm4.228 9.21h8.448L12 14.226zm5.842-6.99l4.224 5.815l2.61-8.035zm6.216-4.122L13 3.963v7.186zM11 3.963L4.166 8.928L11 11.148z"></svg:path>`,
})
export class TdesignChartRadarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
