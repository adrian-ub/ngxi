import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatIndividualSuiteIcon],svg[material-symbols-airline-seat-individual-suite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 17V7h2v8h8V7h8q1.65 0 2.825 1.175T23 11v6zm6-3q1.25 0 2.125-.875T10 11t-.875-2.125T7 8t-2.125.875T4 11t.875 2.125T7 14"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatIndividualSuiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
