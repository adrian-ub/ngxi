import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeBarcodeIcon],svg[icomoon-free-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h2v10H0zm3 0h1v10H3zm2 0h1v10H5zm3 0h1v10H8zm4 0h1v10h-1zm3 0h1v10h-1zm-5 0h.5v10H10zM7 2h.5v10H7zm6.5 0h.5v10h-.5zM0 13h1v1H0zm3 0h1v1H3zm2 0h1v1H5zm5 0h1v1h-1zm5 0h1v1h-1zm-3 0h2v1h-2zm-5 0h2v1H7z"></svg:path>`,
})
export class IcomoonFreeBarcodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
