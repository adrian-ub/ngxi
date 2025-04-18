import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPrintDisabledOutlineSharpIcon],svg[material-symbols-print-disabled-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L18 20.85V21H6v-4H2V8h3.15L1.375 4.225L2.8 2.8l18.4 18.4zM8 19h8v-.15L12.15 15H8zm11.85-2l-2-2H20v-5h-7.15l-2-2H22v9zM4 15h2v-2h4.15l-3-3H4zm12-7V5H7.85l-2-2H18v5zm2 4.5q.425 0 .713-.288T19 11.5t-.288-.712T18 10.5t-.712.288T17 11.5t.288.713t.712.287M4 10h3.15zm16 0h-7.15z"></svg:path>`,
})
export class MaterialSymbolsPrintDisabledOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
