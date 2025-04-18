import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAirlineSeatLegroomExtraIcon],svg[ic-sharp-airline-seat-legroom-extra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3H2v14h11v-2H4zm18.24 12.96l-2.53 1.15l-3.41-6.98A2.02 2.02 0 0 0 14.51 9H11V3H5v11h10l3.41 7l5.07-2.32z"></svg:path>`,
})
export class IcSharpAirlineSeatLegroomExtraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
