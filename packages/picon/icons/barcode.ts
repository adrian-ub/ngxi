import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBarcodeIcon],svg[picon-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7V2h1v5M2 7V2h1v5m1 0V2h2v5M0 7V2h1v5"></svg:path>`,
})
export class PiconBarcodeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
