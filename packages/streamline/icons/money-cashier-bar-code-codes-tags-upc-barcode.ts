import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyCashierBarCodeCodesTagsUpcBarcodeIcon],svg[streamline-money-cashier-bar-code-codes-tags-upc-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5.5v10m3-10v10m3-10v10M11 .5v10m2.5-10v10m-13 3h13"></svg:path>`,
})
export class StreamlineMoneyCashierBarCodeCodesTagsUpcBarcodeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
