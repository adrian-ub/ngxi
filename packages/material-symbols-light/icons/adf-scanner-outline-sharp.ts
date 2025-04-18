import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAdfScannerOutlineSharpIcon],svg[material-symbols-light-adf-scanner-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.577 19.385v-6.77H7V4.847h10v7.77h3.423v6.769zM8 12.615h8V5.847H8zm-3.423 5.77h14.846v-4.77H4.577zm13.039-2.154q.425 0 .712-.288t.288-.712t-.288-.713t-.712-.287t-.713.287t-.287.713t.287.712t.713.288M4.577 13.615h14.846z"></svg:path>`,
})
export class MaterialSymbolsLightAdfScannerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
