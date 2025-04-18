import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDocumentScannerSharpIcon],svg[material-symbols-light-document-scanner-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 5.5v-4h4v1h-3v3zm18 0v-3h-3v-1h4v4zm-18 17v-4h1v3h3v1zm15 0v-1h3v-3h1v4zm-12-3v-15h13v15zm4-10h5v-1h-5zm0 3h5v-1h-5zm0 3h5v-1h-5z"></svg:path>`,
})
export class MaterialSymbolsLightDocumentScannerSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
