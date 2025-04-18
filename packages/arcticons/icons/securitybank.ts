import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSecuritybankIcon],svg[arcticons-securitybank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.058 31.888c-6.265-6.266-6.265-16.424 0-22.689s16.424-6.265 22.69 0zm15.884-15.776c6.265 6.266 6.265 16.424 0 22.689c-6.266 6.265-16.424 6.265-22.69 0z"></svg:path>`,
})
export class ArcticonsSecuritybankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
