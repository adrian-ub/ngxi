import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenLineDuotoneIcon],svg[solar-full-screen-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" opacity=".5"></svg:path><svg:path d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14"></svg:path><svg:path d="M10 2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10" opacity=".5"></svg:path><svg:path d="M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"></svg:path></svg:g>`,
})
export class SolarFullScreenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
