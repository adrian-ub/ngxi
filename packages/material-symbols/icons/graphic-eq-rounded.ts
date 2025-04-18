import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGraphicEqRoundedIcon],svg[material-symbols-graphic-eq-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17V7q0-.425.288-.712T8 6t.713.288T9 7v10q0 .425-.288.713T8 18t-.712-.288T7 17m4 4V3q0-.425.288-.712T12 2t.713.288T13 3v18q0 .425-.288.713T12 22t-.712-.288T11 21m-8-8v-2q0-.425.288-.712T4 10t.713.288T5 11v2q0 .425-.288.713T4 14t-.712-.288T3 13m12 4V7q0-.425.288-.712T16 6t.713.288T17 7v10q0 .425-.288.713T16 18t-.712-.288T15 17m4-4v-2q0-.425.288-.712T20 10t.713.288T21 11v2q0 .425-.288.713T20 14t-.712-.288T19 13"></svg:path>`,
})
export class MaterialSymbolsGraphicEqRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
