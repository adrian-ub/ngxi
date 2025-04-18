import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowRightLineDuotoneIcon],svg[solar-double-alt-arrow-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m11 19l6-7l-6-7"></svg:path><svg:path d="m7 19l6-7l-6-7" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
