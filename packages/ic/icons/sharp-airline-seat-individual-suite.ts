import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlineSeatIndividualSuiteIcon],svg[ic-sharp-airline-seat-individual-suite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3s1.35 3 3 3m16-6H11v7H3V7H1v10h22z"></svg:path>`,
})
export class IcSharpAirlineSeatIndividualSuiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
