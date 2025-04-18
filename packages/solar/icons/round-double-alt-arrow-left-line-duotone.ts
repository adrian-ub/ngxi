import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowLeftLineDuotoneIcon],svg[solar-round-double-alt-arrow-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.5 9l-3 3l3 3m-4-6l-3 3l3 3"></svg:path></svg:g>`,
})
export class SolarRoundDoubleAltArrowLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
