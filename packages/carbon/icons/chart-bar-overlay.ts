import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartBarOverlayIcon],svg[carbon-chart-bar-overlay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 28v-2h22V16H4v-2h14V4H4V2H2v26a2 2 0 0 0 2 2h26v-2Zm20-10v6H4v-2h16v-2H4v-2ZM16 6v6H4v-2h8V8H4V6Z"></svg:path>`,
})
export class CarbonChartBarOverlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
