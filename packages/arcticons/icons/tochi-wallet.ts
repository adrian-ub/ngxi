import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTochiWalletIcon],svg[arcticons-tochi-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.125 19.375h-8.25a.5.5 0 0 0-.5.5v8.25a.5.5 0 0 0 .5.5h8.25a.5.5 0 0 0 .5-.5h0v-8.25a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class ArcticonsTochiWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
