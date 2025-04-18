import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartBarStackedIcon],svg[carbon-chart-bar-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 28v-3h22v-8H4v-4h14V5H4V2H2v26a2 2 0 0 0 2 2h26v-2Zm20-5H14v-4h10Zm-8-12h-6V7h6Z"></svg:path>`,
})
export class CarbonChartBarStackedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
