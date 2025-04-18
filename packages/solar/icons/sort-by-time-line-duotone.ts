import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortByTimeLineDuotoneIcon],svg[solar-sort-by-time-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 7H2m6 5H2m8 5H2" opacity=".5"></svg:path><svg:circle cx="17" cy="12" r="5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 10v1.846L18 13"></svg:path></svg:g>`,
})
export class SolarSortByTimeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
