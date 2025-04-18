import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSkipPreviousBrokenIcon],svg[solar-skip-previous-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 11v7.967c0 2.31-2.134 3.769-3.87 2.648L7.34 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968C19.865 1.264 22 2.724 22 5.033V7M2 5v7m0 7v-3"></svg:path>`,
})
export class SolarSkipPreviousBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
