import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineAirlineSeatFlatAngledIcon],svg[ic-baseline-airline-seat-flat-angled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66l8.56 3.09a4 4 0 0 1 2.41 5.15M1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89l-19.02-6.86zm5.8-1.94a3.01 3.01 0 0 0 1.41-4A3.005 3.005 0 0 0 4.7 4.8a2.99 2.99 0 0 0-1.4 4a2.99 2.99 0 0 0 4 1.4"></svg:path>`,
})
export class IcBaselineAirlineSeatFlatAngledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
