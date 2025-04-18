import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsLeftLineDuotoneIcon],svg[solar-airbuds-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-width="1.5" d="M2 18.667v.833a2.5 2.5 0 0 0 5 0v-.833m-5 0V7.559A5.59 5.59 0 0 1 7.56 2h.105A3.353 3.353 0 0 1 11 5.336V8a3 3 0 0 1-3 3a1 1 0 0 0-1 1v6.667m-5 0h5"></svg:path><svg:path stroke-linecap="round" stroke-width="1.676" d="M8 5v3" opacity=".5"></svg:path><svg:circle cx="5.5" cy="5.5" r="5.5" stroke-width="1.5" opacity=".5" transform="matrix(-1 0 0 1 21 11)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 14v5h3"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="M14 5.1A5.01 5.01 0 0 1 17.9 9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarAirbudsLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
