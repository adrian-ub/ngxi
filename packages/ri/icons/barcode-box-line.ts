import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBarcodeBoxLineIcon],svg[ri-barcode-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 4h3v10H6zm4 0h2v10h-2zm3 0h1v10h-1zm2 0h3v10h-3z"></svg:path>`,
})
export class RiBarcodeBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
