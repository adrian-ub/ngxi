import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBarcodeIcon],svg[vaadin-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h1v10H0zm8 0h2v10H8zm3 0h1v10h-1zm2 0h1v10h-1zm2 0h1v10h-1zM2 3h3v10H2zm4 0h1v10H6z"></svg:path>`,
})
export class VaadinBarcodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
