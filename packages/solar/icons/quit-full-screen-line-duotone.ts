import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenLineDuotoneIcon],svg[solar-quit-full-screen-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 22c0-3.771 0-5.657 1.172-6.828S18.229 14 22 14"></svg:path><svg:path d="M2 14c3.771 0 5.657 0 6.828 1.172S10 18.229 10 22" opacity=".5"></svg:path><svg:path d="M2 10c3.771 0 5.657 0 6.828-1.172S10 5.771 10 2"></svg:path><svg:path d="M22 10c-3.771 0-5.657 0-6.828-1.172S14 5.771 14 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarQuitFullScreenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
