import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLineChartFillIcon],svg[ri-line-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v16h16v2H3V3zm14.94 2.94l2.12 2.12L16 14.122l-3-3l-3.94 3.94l-2.12-2.122L13 6.88l3 3z"></svg:path>`,
})
export class RiLineChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
