import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBarcodeBoxFillIcon],svg[ri-barcode-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 4v10h3V7zm4 0v10h2V7zm3 0v10h1V7zm2 0v10h3V7z"></svg:path>`,
})
export class RiBarcodeBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
