import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLuggageOutlineSharpIcon],svg[material-symbols-luggage-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21H5V6h4V2h6v4h4v15h-2q0 .425-.288.713T16 22t-.712-.288T15 21H9q0 .425-.288.713T8 22t-.712-.288T7 21m0-2h10V8H7zm2-1h2V9H9zm4 0h2V9h-2zM11 6h2V4h-2zm1 7.5"></svg:path>`,
})
export class MaterialSymbolsLuggageOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
