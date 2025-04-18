import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowRightLineDuotoneIcon],svg[solar-round-alt-arrow-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10.5 9l3 3l-3 3"></svg:path></svg:g>`,
})
export class SolarRoundAltArrowRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
