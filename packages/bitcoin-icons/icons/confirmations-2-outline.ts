import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsConfirmations2OutlineIcon],svg[bitcoin-icons-confirmations-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linejoin="round" d="M17.783 10.394a6.03 6.03 0 0 1-.001 3.213l2.214 1.277a8.5 8.5 0 0 0 0-5.768zm-1.502-2.598l2.215-1.278A8.5 8.5 0 0 0 13.5 3.633V6.19a6 6 0 0 1 2.781 1.607Z"></svg:path><svg:path stroke-linecap="round" d="M17.388 16.851a7.25 7.25 0 0 1-3.88 2.24m-3.015.001a7.25 7.25 0 0 1-3.88-2.24M5.105 14.24a7.25 7.25 0 0 1 0-4.48m1.507-2.611a7.25 7.25 0 0 1 3.88-2.24"></svg:path></svg:g>`,
})
export class BitcoinIconsConfirmations2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
