import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWalletIcon],svg[tdesign-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a3 3 0 0 1 3-3h15v2H5a1 1 0 0 0 0 2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H2zm2 2.83V20h15a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5c-.35 0-.687-.06-1-.17M15 13h3v2h-3z"></svg:path>`,
})
export class TdesignWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
