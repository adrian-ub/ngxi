import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagVanuatuIcon],svg[openmoji-flag-vanuatu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#5c9e31" d="M5 36h62v19H5z"></svg:path><svg:path d="M25.248 36.68L6.533 53.613A.918.918 0 0 1 5 52.933V19.066a.918.918 0 0 1 1.533-.68L25.248 35.32a.92.92 0 0 1 0 1.36"></svg:path><svg:path fill="#f1b31c" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26 34L5 17v4l18.529 15L5 51v4l21-17h41v-4z"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="M12.333 39.273a3.93 3.93 0 0 0 4.167-3.637a3.143 3.143 0 0 0-3.333-2.909a2.514 2.514 0 0 0-2.667 2.328a2.01 2.01 0 0 0 2.133 1.861"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagVanuatuIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
