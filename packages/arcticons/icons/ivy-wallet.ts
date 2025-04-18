import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvyWalletIcon],svg[arcticons-ivy-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.312 38.862H11.688A6.32 6.32 0 0 1 5.5 33.817h0a48.7 48.7 0 0 1 0-19.634h0a6.32 6.32 0 0 1 6.188-5.045h24.624a6.32 6.32 0 0 1 6.188 5.045h0a48.7 48.7 0 0 1 0 19.634h0a6.32 6.32 0 0 1-6.188 5.045"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 18L24 30l7.5-12"></svg:path>`,
})
export class ArcticonsIvyWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
