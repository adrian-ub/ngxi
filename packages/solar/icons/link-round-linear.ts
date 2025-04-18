import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundLinearIcon],svg[solar-link-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.472-10"></svg:path>`,
})
export class SolarLinkRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
