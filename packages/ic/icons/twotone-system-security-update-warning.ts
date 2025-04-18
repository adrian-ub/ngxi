import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSystemSecurityUpdateWarningIcon],svg[ic-twotone-system-security-update-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h2v6h-2zm0 8h2v2h-2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2z"></svg:path><svg:path fill="currentColor" d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10z"></svg:path><svg:path fill="currentColor" d="M7 21h10v-1H7zM7 3v1h10V3z" opacity=".3"></svg:path>`,
})
export class IcTwotoneSystemSecurityUpdateWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
