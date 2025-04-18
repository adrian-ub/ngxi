import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAccountBalanceWalletOutlineSharpIcon],svg[material-symbols-light-account-balance-wallet-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17v2V5zm15-8.442h-1V5H5v14h14v-3.558h1V20H4V4h16zM12 16V8h9v8zm4-2.5q.625 0 1.063-.437T17.5 12t-.437-1.062T16 10.5t-1.062.438T14.5 12t.438 1.063T16 13.5m4 1.5V9h-7v6z"></svg:path>`,
})
export class MaterialSymbolsLightAccountBalanceWalletOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
