import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemDeviceIcon],svg[tdesign-system-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.533 1H21v21H2V6.588h4.533zm2 5.588h4.534V20H19V3H8.533zM11.067 20V8.588H4V20zM6 16h3v2H6z"></svg:path>`,
})
export class TdesignSystemDeviceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
