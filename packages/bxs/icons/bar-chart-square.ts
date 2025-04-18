import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBarChartSquareIcon],svg[bxs-bar-chart-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2M9 18H7v-6h2zm4 0h-2V7h2zm4 0h-2v-8h2z"></svg:path>`,
})
export class BxsBarChartSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
