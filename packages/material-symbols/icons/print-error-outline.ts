import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPrintErrorOutlineIcon],svg[material-symbols-print-error-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21v-4H2v-6q0-1.275.875-2.137T5 8h14q1 0 1.763.563T21.825 10H5q-.425 0-.712.288T4 11v4h2v-2h10v2H8v4h8v2zM6 8V3h12v5h-2V5H8v3zm13 13q-.425 0-.712-.288T18 20t.288-.712T19 19t.713.288T20 20t-.288.713T19 21m-1-4v-5h2v5zM4 10h17.825z"></svg:path>`,
})
export class MaterialSymbolsPrintErrorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
