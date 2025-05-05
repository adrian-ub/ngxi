import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAmbulanceIcon],svg[picon-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h5l3 3v3H7Q6 9 5 7H3Q2 9 1 7H0m7-3L5 2v2M3 2H2v1H1v1h1v1h1V4h1V3H3"></svg:path>`,
})
export class PiconAmbulanceIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
