import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatH4OutlineRoundedIcon],svg[material-symbols-format-h4-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.425 0-.712-.288T3 16V8q0-.425.288-.712T4 7t.713.288T5 8v3h4V8q0-.425.288-.712T10 7t.713.288T11 8v8q0 .425-.288.713T10 17t-.712-.288T9 16v-3H5v3q0 .425-.288.713T4 17m15 0q-.425 0-.712-.288T18 16v-2h-4q-.425 0-.712-.288T13 13V8q0-.425.288-.712T14 7t.713.288T15 8v4h3V8q0-.425.288-.712T19 7t.713.288T20 8v4h1q.425 0 .713.288T22 13t-.288.713T21 14h-1v2q0 .425-.288.713T19 17"></svg:path>`,
})
export class MaterialSymbolsFormatH4OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
