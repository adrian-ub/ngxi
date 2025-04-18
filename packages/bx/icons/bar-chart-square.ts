import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBarChartSquareIcon],svg[bx-bar-chart-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2m16.001 14H5V5h14z"></svg:path><svg:path fill="currentColor" d="M11 7h2v10h-2zm4 3h2v7h-2zm-8 2h2v5H7z"></svg:path>`,
})
export class BxBarChartSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
