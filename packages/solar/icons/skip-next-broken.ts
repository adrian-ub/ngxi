import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSkipNextBrokenIcon],svg[solar-skip-next-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 11v7.967c0 2.31 2.134 3.769 3.87 2.648l10.79-6.968c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033V7m20-2v7m0 4v3"></svg:path>`,
})
export class SolarSkipNextBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
