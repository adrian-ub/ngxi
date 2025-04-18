import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEdenredWalletIcon],svg[arcticons-edenred-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="35.557" height="28.446" x="6.221" y="14.054" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.399" ry="4.399"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.221 18.453v-2.556a3.935 3.935 0 0 1 2.823-3.775l21.992-6.485A3.3 3.3 0 0 1 35.268 8.8v5.253"></svg:path><svg:circle cx="35.268" cy="28.277" r="2.749" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsEdenredWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
