import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryLowLightIcon],svg[lets-icons-battery-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="9" height="14" x="7.5" y="6.5" stroke="currentColor" rx="1.5"></svg:rect><svg:rect width="6" height="3" x="9" y="16" fill="currentColor" rx=".8"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M9.293 3.293C9 3.586 9 4.057 9 5h6c0-.943 0-1.414-.293-1.707S13.943 3 13 3h-2c-.943 0-1.414 0-1.707.293" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBatteryLowLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
