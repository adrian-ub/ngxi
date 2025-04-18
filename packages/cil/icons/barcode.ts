import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBarcodeIcon],svg[cil-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 464h480V56H16ZM48 88h416v344H48Z"></svg:path><svg:path fill="currentColor" d="M80 128h32v256H80zm64 0h32v192h-32zm64 0h32v256h-32zm64 0h32v192h-32zm64 0h32v192h-32zm64 0h32v256h-32zM144 352h32v32h-32zm128 0h32v32h-32zm64 0h32v32h-32z"></svg:path>`,
})
export class CilBarcodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
