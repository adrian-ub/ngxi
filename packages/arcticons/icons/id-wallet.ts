import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIdWalletIcon],svg[arcticons-id-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="36.65" height="26.043" x="5.675" y="10.979" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:circle cx="14.838" cy="21.487" r="3.563" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.328 31.095h9.783a.92.92 0 0 0 .7-1.52a7.172 7.172 0 0 0-11.183 0a.92.92 0 0 0 .7 1.52M28.709 20.85h6.999m-6.999 6.872h6.999m-6.999-3.436h9.671"></svg:path>`,
})
export class ArcticonsIdWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
