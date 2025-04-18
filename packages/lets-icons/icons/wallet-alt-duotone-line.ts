import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletAltDuotoneLineIcon],svg[lets-icons-wallet-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M15 12h6v4h-6z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M14.25 4h-4.5C6.568 4 4.977 4 3.989 5.004S3 7.624 3 10.857v2.286c0 3.232 0 4.849.989 5.853C4.977 20 6.568 20 9.75 20h4.5c3.182 0 4.773 0 5.762-1.004s.988-2.62.988-5.853v-2.286c0-3.232 0-4.849-.988-5.853C19.023 4 17.432 4 14.25 4Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M7 8h3"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M19 16h-2c-.943 0-1.414 0-1.707-.293S15 14.943 15 14s0-1.414.293-1.707S16.057 12 17 12h2c.943 0 1.414 0 1.707.293S21 13.057 21 14s0 1.414-.293 1.707S19.943 16 19 16Z"></svg:path></svg:g>`,
})
export class LetsIconsWalletAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
