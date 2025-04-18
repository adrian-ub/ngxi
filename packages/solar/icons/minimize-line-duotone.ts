import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeLineDuotoneIcon],svg[solar-minimize-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m2 22l7-7m0 0H3.143M9 15v5.857" opacity=".6"></svg:path><svg:path d="m22 2l-7 7m0 0h5.857M15 9V3.143"></svg:path></svg:g>`,
})
export class SolarMinimizeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
