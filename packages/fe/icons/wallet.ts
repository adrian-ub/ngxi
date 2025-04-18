import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feWalletIcon],svg[fe-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 9c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-2 0V6H4v12h14v-3h-2c-1.1 0-2-1.1-2-2v-1.968C14 9.9 14.9 9 16 9zm-2 4h2v-2h-2z"></svg:path>`,
})
export class FeWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
