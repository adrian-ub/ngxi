import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBarcodeIcon],svg[carbon-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h2v22H2zm10 0h2v20h-2zM6 6h4v20H6zm10 0h4v20h-4zm6 0h4v20h-4zm6 0h2v22h-2z"></svg:path>`,
})
export class CarbonBarcodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
