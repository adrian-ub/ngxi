import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciBarcodeIcon],svg[ci-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h3v16H2V4Zm4 0h1v16H6V4Zm5 0H9v16h2V4Zm1 0h2v16h-2V4Zm3 0h1v16h-1V4Zm5 0h-3v16h3V4Zm1 0h1v16h-1V4Z"></svg:path>`,
})
export class CiBarcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
