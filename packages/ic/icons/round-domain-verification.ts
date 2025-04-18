import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundDomainVerificationIcon],svg[ic-round-domain-verification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.23 15.83c.39.39 1.02.39 1.41 0l4.24-4.24c.39-.39.39-1.02 0-1.42a.996.996 0 0 0-1.41 0l-3.54 3.53l-1.41-1.41c-.39-.39-1.02-.39-1.42 0s-.39 1.02 0 1.41z"></svg:path><svg:path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m0 13c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V8h14z"></svg:path>`,
})
export class IcRoundDomainVerificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
