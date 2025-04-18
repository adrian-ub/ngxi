import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatH2RoundedIcon],svg[material-symbols-format-h2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.425 0-.712-.288T3 16V8q0-.425.288-.712T4 7t.713.288T5 8v3h4V8q0-.425.288-.712T10 7t.713.288T11 8v8q0 .425-.288.713T10 17t-.712-.288T9 16v-3H5v3q0 .425-.288.713T4 17m10 0q-.425 0-.712-.288T13 16v-3q0-.825.588-1.412T15 11h4V9h-5q-.425 0-.712-.288T13 8t.288-.712T14 7h5q.825 0 1.413.588T21 9v2q0 .825-.587 1.413T19 13h-4v2h5q.425 0 .713.288T21 16t-.288.713T20 17z"></svg:path>`,
})
export class MaterialSymbolsFormatH2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
