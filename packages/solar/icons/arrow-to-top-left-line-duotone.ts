import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowToTopLeftLineDuotoneIcon],svg[solar-arrow-to-top-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m17 9.5l-5-5l-5 5"></svg:path><svg:path d="M12 4.5v10c0 1.667-1 5-5 5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarArrowToTopLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
