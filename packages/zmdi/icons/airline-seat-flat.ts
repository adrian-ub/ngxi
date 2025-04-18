import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatFlatIcon],svg[zmdi-airline-seat-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 171v42H149V85h192q36 0 61 25t25 61M0 235h427v42H299v43H128v-43H0zm109.5-41q-18.5 19-45 19.5T19 195T0 150t18.5-45t45-19.5t45.5 18t19 45t-18.5 45.5"></svg:path>`,
})
export class ZmdiAirlineSeatFlatIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
