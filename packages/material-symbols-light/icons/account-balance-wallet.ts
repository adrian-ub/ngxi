import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAccountBalanceWalletIcon],svg[material-symbols-light-account-balance-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616V7h-6.384q-1.199 0-1.907.709Q11 8.417 11 9.616v4.769q0 1.198.709 1.906q.708.709 1.907.709H20v1.385q0 .69-.462 1.152T18.384 20zm8-4q-.691 0-1.153-.462T12 14.385v-4.77q0-.69.463-1.152T13.616 8h5.769q.69 0 1.153.463T21 9.616v4.769q0 .69-.462 1.153T19.385 16zM16 13.5q.65 0 1.075-.425T17.5 12t-.425-1.075T16 10.5t-1.075.425T14.5 12t.425 1.075T16 13.5"></svg:path>`,
})
export class MaterialSymbolsLightAccountBalanceWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
