import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatIndividualSuiteIcon],svg[zmdi-airline-seat-individual-suite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 213q-26 0-45-18.5t-19-45T83 104t45-19t45 19t19 45.5t-19 45t-45 18.5M384 85q35 0 60 25t25 61v128H0V85h43v150h170V85z"></svg:path>`,
})
export class ZmdiAirlineSeatIndividualSuiteIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
