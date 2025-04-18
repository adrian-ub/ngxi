import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlightLandLineIcon],svg[ri-flight-land-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.949 14.888a1.5 1.5 0 0 1-1.837 1.06L3.445 11.752a1 1 0 0 1-.74-.983l.09-5.403l1.449.388l.915 3.351l5.095 1.366l-.37-8.382l1.933.518l2.81 9.035l5.261 1.41a1.5 1.5 0 0 1 1.061 1.837M4 19h16v2H4z"></svg:path>`,
})
export class RiFlightLandLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
