import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAdfScannerOutlineIcon],svg[material-symbols-adf-scanner-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-5q0-1.25.875-2.125T5 12h1V4h12v8h1q1.25 0 2.125.875T22 15v5zm6-8h8V6H8zm-4 6h16v-3q0-.425-.288-.712T19 14H5q-.425 0-.712.288T4 15zm14-1q.425 0 .713-.288T19 16t-.288-.712T18 15t-.712.288T17 16t.288.713T18 17M4 14h16z"></svg:path>`,
})
export class MaterialSymbolsAdfScannerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
