import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMizuhoWalletIcon],svg[arcticons-mizuho-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 16.5c0-3.324 2.676-6 6-6h25c3.324 0 6 2.676 6 6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 20.5c0-3.324 2.676-6 6-6h25c3.324 0 6 2.676 6 6M18.417 32.477V21.323L24 32.489l5.583-11.149v11.149M18 35.71c4.704-1.358 10.645-.967 14.485.954"></svg:path>`,
})
export class ArcticonsMizuhoWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
