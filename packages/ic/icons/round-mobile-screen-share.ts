import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundMobileScreenShareIcon],svg[ic-round-mobile-screen-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 18H7V5h10zm-4.2-5.78v1.75l2.81-2.62c.21-.2.21-.53 0-.73L12.8 9v1.7c-3.11.43-4.35 2.56-4.8 4.7c1.11-1.5 2.58-2.18 4.8-2.18"></svg:path>`,
})
export class IcRoundMobileScreenShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
