import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletDuotoneIcon],svg[lets-icons-wallet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a2 2 0 0 1 2-2h14.5a.5.5 0 0 1 .5.5V6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"></svg:path><svg:path fill="currentColor" fill-opacity=".25" d="M3 16V6a2 2 0 0 0 2 2h14a2 2 0 0 1 2 2v2.85a.15.15 0 0 1-.15.15H18a2 2 0 1 0 0 4h2.85a.15.15 0 0 1 .15.15V18a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4"></svg:path><svg:path fill="currentColor" d="M15 15a2 2 0 0 1 2-2h3.85a.15.15 0 0 1 .15.15v3.7a.15.15 0 0 1-.15.15H17a2 2 0 0 1-2-2"></svg:path><svg:rect width="6" height="1" x="5" y="10" fill="currentColor" rx=".5"></svg:rect>`,
})
export class LetsIconsWalletDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
