import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBarcodeScannerIcon],svg[material-symbols-light-barcode-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 20.5v-4h1v3h3v1zm17 0v-1h3v-3h1v4zM4 18V6h2v12zm3 0V6h1v12zm3 0V6h2v12zm3 0V6h3v12zm4 0V6h1v12zm2 0V6h1v12zM1.5 7.5v-4h4v1h-3v3zm20 0v-3h-3v-1h4v4z"></svg:path>`,
})
export class MaterialSymbolsLightBarcodeScannerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
