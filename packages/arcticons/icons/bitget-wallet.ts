import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBitgetWalletIcon],svg[arcticons-bitget-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.33 4L5.353 15.97c-.72.72-.72 1.88 0 2.6l9.206 9.2h8.94L13.43 17.702a.61.61 0 0 1 0-.866L26.273 4z"></svg:path><svg:path d="m37 30.049l1.02-1.02c.72-.72.72-1.879 0-2.599l-9.206-9.2h-8.941l10.07 10.067a.61.61 0 0 1 0 .866L17.102 41h8.943l3.21-3.21"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M43.187 37a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path><svg:path d="m40.187 33l-2 8l-2-8l-2 8l-2-8"></svg:path></svg:g>`,
})
export class ArcticonsBitgetWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
