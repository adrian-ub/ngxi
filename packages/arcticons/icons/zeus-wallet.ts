import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZeusWalletIcon],svg[arcticons-zeus-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.41 4.5H10.59l5.853 11.155S20.503 6.924 31.052 4.5l-20.462 39h26.82l-5.853-11.155s-4.06 8.732-14.609 11.155z"></svg:path>`,
})
export class ArcticonsZeusWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
