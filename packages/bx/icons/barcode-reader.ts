import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBarcodeReaderIcon],svg[bx-barcode-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h2v10H5zm9 0h1v10h-1zm-4 0h3v10h-3zM8 7h1v10H8zm8 0h3v10h-3z"></svg:path><svg:path fill="currentColor" d="M4 5h4V3H4c-1.103 0-2 .897-2 2v4h2zm0 16h4v-2H4v-4H2v4c0 1.103.897 2 2 2M20 3h-4v2h4v4h2V5c0-1.103-.897-2-2-2m0 16h-4v2h4c1.103 0 2-.897 2-2v-4h-2z"></svg:path>`,
})
export class BxBarcodeReaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
