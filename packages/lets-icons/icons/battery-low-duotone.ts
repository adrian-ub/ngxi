import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryLowDuotoneIcon],svg[lets-icons-battery-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="15" x="7" y="6" fill="currentColor" fill-opacity=".25" rx="1.5"></svg:rect><svg:rect width="8" height="5" x="8" y="15" fill="currentColor" rx="1"></svg:rect><svg:rect width="6" height="2" x="9" y="3" fill="currentColor" fill-opacity=".25" rx="1"></svg:rect>`,
})
export class LetsIconsBatteryLowDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
