import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatIndividualSuiteSharpIcon],svg[material-symbols-airline-seat-individual-suite-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 17V7h2v8h8V7h12v10zm6-3q1.25 0 2.125-.875T10 11t-.875-2.125T7 8t-2.125.875T4 11t.875 2.125T7 14"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatIndividualSuiteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
