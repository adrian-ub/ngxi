import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAccountBalanceWalletOutlineSharpIcon],svg[material-symbols-account-balance-wallet-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V5zM21 7.5h-2V5H5v14h14v-2.5h2V21H3V3h18zM11 17V7h11v10zm5-3.5q.625 0 1.063-.437T17.5 12t-.437-1.062T16 10.5t-1.062.438T14.5 12t.438 1.063T16 13.5m4 1.5V9h-7v6z"></svg:path>`,
})
export class MaterialSymbolsAccountBalanceWalletOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
