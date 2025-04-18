import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSweatWalletIcon],svg[arcticons-sweat-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.817 9.722l11.599 20.066l-8.001 8.49h-2.992L4.5 18.03l8.399-8.308z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.538 17.89l8.445-8.168h2.918L43.5 29.788l-8.001 8.49h-2.992l-5.091-8.49"></svg:path>`,
})
export class ArcticonsSweatWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
