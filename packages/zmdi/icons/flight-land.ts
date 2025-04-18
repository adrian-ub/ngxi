import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFlightLandIcon],svg[zmdi-flight-land-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 368h405v43H0zm153-122L40 215l-34-9V96l31 8l20 50l106 28V5l41 11l59 193l113 30q13 3 19.5 14.5t3 24.5t-15 19.5T359 301l-113-30z"></svg:path>`,
})
export class ZmdiFlightLandIcon {
  readonly viewBox = input("0 0 408 416")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
