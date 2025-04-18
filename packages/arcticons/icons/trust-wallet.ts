import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrustWalletIcon],svg[arcticons-trust-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c1.35-.062 8.977-4.15 11.767-8.742s4.268-16.815 4.37-24.879C32.072 9.88 26.853 7.352 24 4.5c-2.855 2.855-8.062 5.38-16.138 5.38c0 8.065 1.68 20.217 4.371 24.878S22.65 43.561 24 43.5"></svg:path>`,
})
export class ArcticonsTrustWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
