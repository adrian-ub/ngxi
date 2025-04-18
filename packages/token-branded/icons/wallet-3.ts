import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWallet3Icon],svg[token-branded-wallet-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#6286FF" d="M21 3H3v18h18z"></svg:path><svg:path fill="#fff" d="M18.12 8.412a.572.572 0 0 1-.733.607l-3.411-1.042a.57.57 0 0 0-.722.412l-.857 3.593a.57.57 0 0 1-.808.379L3 8.113v7.069l11.815 3.36a.57.57 0 0 0 .726-.547l.03-6.995a.57.57 0 0 1 .769-.532l2.578.959a.57.57 0 0 0 .76-.64L18.221 3h-.688z"></svg:path></svg:g>`,
})
export class TokenBrandedWallet3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
