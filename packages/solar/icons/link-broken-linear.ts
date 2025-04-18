import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenLinearIcon],svg[solar-link-broken-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m2 8l6 2M6 4l2 3m3-.437l3.7-3.625c1.46-1.43 4.063-1.199 5.815.517c1.751 1.716 1.988 4.267.528 5.697L18.136 12M15 15.587L10.965 20c-1.392 1.524-3.876 1.277-5.548-.552c-1.67-1.828-1.897-4.546-.504-6.07L6.173 12"></svg:path>`,
})
export class SolarLinkBrokenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
