import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBarcodeIcon],svg[material-symbols-light-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.692 18.308V6.462h1.693v11.846zm2.539 0V6.462h1.692v11.846zm2.538 0V6.462h.847v11.846zm2.539 0V6.462H12v11.846zm2.538 0V6.462h2.539v11.846zm3.385 0V6.462h.846v11.846zm2.538 0V6.462h2.539v11.846z"></svg:path>`,
})
export class MaterialSymbolsLightBarcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
