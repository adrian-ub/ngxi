import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatFlatRoundedIcon],svg[material-symbols-airline-seat-flat-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14q-.425 0-.712-.288T9 13V9q0-.825.588-1.412T11 7h7q1.65 0 2.825 1.175T22 11v2q0 .425-.288.713T21 14zm11 3H3q-.425 0-.712-.288T2 16t.288-.712T3 15h18q.425 0 .713.288T22 16t-.288.713T21 17M5 14q-1.25 0-2.125-.875T2 11t.875-2.125T5 8t2.125.875T8 11t-.875 2.125T5 14"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatFlatRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
