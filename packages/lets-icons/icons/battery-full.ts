import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryFullIcon],svg[lets-icons-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="10" height="15" x="7" y="6" stroke="currentColor" stroke-width="2" rx="2"></svg:rect><svg:rect width="6" height="11" x="9" y="8" fill="currentColor" rx=".8"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M9.293 1.293C9 1.586 9 2.057 9 3h6c0-.943 0-1.414-.293-1.707S13.943 1 13 1h-2c-.943 0-1.414 0-1.707.293" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
