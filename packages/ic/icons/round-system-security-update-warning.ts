import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSystemSecurityUpdateWarningIcon],svg[ic-round-system-security-update-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1"></svg:path><svg:path fill="currentColor" d="M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10z"></svg:path>`,
})
export class IcRoundSystemSecurityUpdateWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
