import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowDownLinearIcon],svg[solar-round-double-alt-arrow-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 8.5l3 3l3-3m-6 4l3 3l3-3"></svg:path></svg:g>`,
})
export class SolarRoundDoubleAltArrowDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
