import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDocumentScannerOutlineSharpIcon],svg[material-symbols-document-scanner-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6V1h5v2H4v3zm18 0V3h-3V1h5v5zM2 23v-5h2v3h3v2zm15 0v-2h3v-3h2v5zM7 18h10V6H7zm-2 2V4h14v16zm4-10h6V8H9zm0 3h6v-2H9zm0 3h6v-2H9zm-2 2V6z"></svg:path>`,
})
export class MaterialSymbolsDocumentScannerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
