import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundRememberMeIcon],svg[ic-round-remember-me-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 14.21c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10z"></svg:path><svg:circle cx="12" cy="10" r="3" fill="currentColor"></svg:circle>`,
})
export class IcRoundRememberMeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
