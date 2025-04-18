import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBarcodeIcon],svg[tdesign-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h3v19H2zm6.75 0v19h-2V2zm1.75 0h3v19h-3zm6.75 0v19h-2V2zM19 2h3v19h-3z"></svg:path>`,
})
export class TdesignBarcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
