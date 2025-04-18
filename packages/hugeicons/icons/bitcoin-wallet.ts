import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinWalletIcon],svg[hugeicons-bitcoin-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 13a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path d="M11 19h5c2.828 0 4.243 0 5.121-.879C22 17.243 22 15.828 22 13v-1c0-2.828 0-4.243-.879-5.121c-.641-.642-1.568-.815-3.121-.862M10 6h6c.764 0 1.425 0 2 .017M2 10c0-3.771 0-4.657 1.172-5.828S6.229 3 10 3h4.983c.948 0 1.422 0 1.795.157a2 2 0 0 1 1.065 1.065C18 4.595 18 5.07 18 6.017M3.125 19.5v-6M5 13.5V12m0 9v-1.5m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H2m4.875-3C7.496 16.5 8 15.996 8 15.375v-.75c0-.621-.504-1.125-1.125-1.125H2"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
