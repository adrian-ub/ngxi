import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatFlatOutlineIcon],svg[material-symbols-airline-seat-flat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14V7h9q1.65 0 2.825 1.175T22 11v3zm2-5v3zm-9 8v-2h20v2zm3-3q-1.25 0-2.125-.875T2 11t.875-2.125T5 8t2.125.875T8 11t-.875 2.125T5 14m0-2q.425 0 .713-.288T6 11t-.288-.712T5 10t-.712.288T4 11t.288.713T5 12m6 0h9v-1q0-.825-.587-1.412T18 9h-7zm-6-1"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatFlatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
