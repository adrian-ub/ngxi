import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlightTakeoffLineIcon],svg[ri-flight-takeoff-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.949 10.112a1.5 1.5 0 0 1-1.06 1.837L5.221 16.147a1 1 0 0 1-1.133-.48l-2.623-4.725l1.449-.389l2.468 2.445l5.095-1.365l-4.51-7.074l1.931-.518l6.952 6.42l5.26-1.41a1.5 1.5 0 0 1 1.838 1.06M4 19h16v2H4z"></svg:path>`,
})
export class RiFlightTakeoffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
