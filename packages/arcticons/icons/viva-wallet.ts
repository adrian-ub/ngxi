import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVivaWalletIcon],svg[arcticons-viva-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.674 10.081l9.826 4.704l-9.244 18.673c-3.93 7.939-8.082 3.754-10.643-1.77l-9.963-21.49L4.5 14.69l8.358 18.278c5.243 11.466 10.378-.47 10.755-1.28z"></svg:path>`,
})
export class ArcticonsVivaWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
