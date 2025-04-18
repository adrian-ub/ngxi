import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartPieFilledIcon],svg[tdesign-chart-pie-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1.045V11h9.955A11 11 0 0 0 13 1.045"></svg:path><svg:path fill="currentColor" d="M11 1.045V13h11.955C22.45 18.607 17.738 23 12 23C5.925 23 1 18.075 1 12C1 6.262 5.394 1.55 11 1.045"></svg:path>`,
})
export class TdesignChartPieFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
