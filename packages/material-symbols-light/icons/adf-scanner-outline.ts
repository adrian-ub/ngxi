import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAdfScannerOutlineIcon],svg[material-symbols-light-adf-scanner-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.577 19.385v-4.77q0-.846.577-1.423q.577-.576 1.423-.576H7v-7.77h10v7.77h1.423q.846 0 1.423.576q.577.577.577 1.424v4.769zM8 12.615h8V5.847H8zm-3.423 5.77h14.846v-3.77q0-.424-.287-.712t-.713-.288H5.577q-.425 0-.712.288t-.288.713zm13.039-2.154q.425 0 .712-.288t.288-.712t-.288-.713t-.712-.287t-.713.287t-.287.713t.287.712t.713.288M4.577 13.615h14.846z"></svg:path>`,
})
export class MaterialSymbolsLightAdfScannerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
