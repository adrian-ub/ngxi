import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCloseCircleLineDuotoneIcon],svg[solar-close-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarCloseCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
