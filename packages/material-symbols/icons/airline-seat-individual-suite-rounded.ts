import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatIndividualSuiteRoundedIcon],svg[material-symbols-airline-seat-individual-suite-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17q-.825 0-1.412-.587T1 15V8q0-.425.288-.712T2 7t.713.288T3 8v7h8V9q0-.825.588-1.412T13 7h6q1.65 0 2.825 1.175T23 11v4q0 .825-.587 1.413T21 17zm4-3q1.25 0 2.125-.875T10 11t-.875-2.125T7 8t-2.125.875T4 11t.875 2.125T7 14"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatIndividualSuiteRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
