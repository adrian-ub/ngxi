import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundAirlineSeatIndividualSuiteIcon],svg[ic-round-airline-seat-individual-suite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3s1.35 3 3 3m12-6h-6c-1.1 0-2 .9-2 2v5H3V8c0-.55-.45-1-1-1s-1 .45-1 1v7c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-4c0-2.21-1.79-4-4-4"></svg:path>`,
})
export class IcRoundAirlineSeatIndividualSuiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
