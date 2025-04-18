import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarScreencastLineDuotoneIcon],svg[solar-screencast-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11 20h3c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4H6.5c-.464 0-.697 0-.892.02a4 4 0 0 0-3.589 3.588C2 7.803 2 8.036 2 8.5V11" opacity=".5"></svg:path><svg:path d="M11 20a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 20a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarScreencastLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
