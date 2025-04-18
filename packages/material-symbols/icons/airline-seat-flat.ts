import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatFlatIcon],svg[material-symbols-airline-seat-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14V7h9q1.65 0 2.825 1.175T22 11v3zm-7 3v-2h20v2zm3-3q-1.25 0-2.125-.875T2 11t.875-2.125T5 8t2.125.875T8 11t-.875 2.125T5 14"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
