import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatH4RoundedIcon],svg[material-symbols-format-h4-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 17q-.425 0-.712-.288T2.5 16V8q0-.425.288-.712T3.5 7t.713.288T4.5 8v3h4V8q0-.425.288-.712T9.5 7t.713.288T10.5 8v8q0 .425-.288.713T9.5 17t-.712-.288T8.5 16v-3h-4v3q0 .425-.288.713T3.5 17m15 0q-.425 0-.712-.288T17.5 16v-2h-4q-.425 0-.712-.288T12.5 13V8q0-.425.288-.712T13.5 7t.713.288T14.5 8v4h3V8q0-.425.288-.712T18.5 7t.713.288T19.5 8v4h1q.425 0 .713.288T21.5 13t-.288.713T20.5 14h-1v2q0 .425-.288.713T18.5 17"></svg:path>`,
})
export class MaterialSymbolsFormatH4RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
