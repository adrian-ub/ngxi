import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenWalletIcon],svg[token-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.85 14.7l-2.7-2.926l-4.05 3.375V21zm-7.65-4.05L8.85 8.625l-2.475 2.25l.9 1.575l2.475-.9zm1.35-2.7V3l2.7 6.3z"></svg:path><svg:path fill="currentColor" d="m14.25 9.3l-2.7-1.35l-5.4 7.425l3.6 3.825zm.9 2.475V9.75l2.7 4.95zm-6.3-3.15l.9-3.375l-3.375 5.625z"></svg:path>`,
})
export class TokenWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
