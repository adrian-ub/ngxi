import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatIndividualSuiteOutlineSharpIcon],svg[material-symbols-airline-seat-individual-suite-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 17V7h2v8h8V7h12v10zm12-2h8V9h-8zm0-6v6zm-6 5q1.25 0 2.125-.875T10 11t-.875-2.125T7 8t-2.125.875T4 11t.875 2.125T7 14m0-2q-.425 0-.712-.288T6 11t.288-.712T7 10t.713.288T8 11t-.288.713T7 12m0-1"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatIndividualSuiteOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
