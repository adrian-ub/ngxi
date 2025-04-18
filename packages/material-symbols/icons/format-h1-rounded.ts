import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatH1RoundedIcon],svg[material-symbols-format-h1-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17q-.425 0-.712-.288T5 16V8q0-.425.288-.712T6 7t.713.288T7 8v3h4V8q0-.425.288-.712T12 7t.713.288T13 8v8q0 .425-.288.713T12 17t-.712-.288T11 16v-3H7v3q0 .425-.288.713T6 17m12 0q-.425 0-.712-.288T17 16V9h-1q-.425 0-.712-.288T15 8t.288-.712T16 7h2q.425 0 .713.288T19 8v8q0 .425-.288.713T18 17"></svg:path>`,
})
export class MaterialSymbolsFormatH1RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
