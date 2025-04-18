import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTransmissionSquareLinearIcon],svg[solar-transmission-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M8 9v6m4-6v6m-4-3h5c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C16 10.398 16 9.932 16 9"></svg:path><svg:rect width="20" height="20" x="2" y="2" rx="5"></svg:rect></svg:g>`,
})
export class SolarTransmissionSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
