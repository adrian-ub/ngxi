import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHotelRoundedIcon],svg[material-symbols-hotel-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19q-.425 0-.712-.288T1 18V5q0-.425.288-.712T2 4t.713.288T3 5v9h8V8q0-.825.588-1.412T13 6h6q1.65 0 2.825 1.175T23 10v8q0 .425-.288.713T22 19t-.712-.288T21 18v-2H3v2q0 .425-.288.713T2 19m5-6q-1.25 0-2.125-.875T4 10t.875-2.125T7 7t2.125.875T10 10t-.875 2.125T7 13"></svg:path>`,
})
export class MaterialSymbolsHotelRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
