import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsLightningCircleFilledIcon],svg[bitcoin-icons-lightning-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-1.58-3.89l6.215-5.966a.2.2 0 0 0-.14-.344l-4.519.052a.2.2 0 0 1-.184-.283l1.654-3.64c.09-.2-.16-.378-.32-.227l-5.76 5.448a.2.2 0 0 0 .137.345h4.641a.2.2 0 0 1 .176.295l-2.215 4.08c-.11.2.15.397.314.24" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsLightningCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
