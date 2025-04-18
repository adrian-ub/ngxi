import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHourglassIcon],svg[tdesign-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v3a8 8 0 0 1-4.124 7A8 8 0 0 1 20 19v3H4v-3a8 8 0 0 1 4.124-7A8 8 0 0 1 4 5zm8 11a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6M6 4v1a6 6 0 1 0 12 0V4z"></svg:path>`,
})
export class TdesignHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
