import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSystemSecurityUpdateWarningIcon],svg[ic-baseline-system-security-update-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2z"></svg:path><svg:path fill="currentColor" d="M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10z"></svg:path>`,
})
export class IcBaselineSystemSecurityUpdateWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
