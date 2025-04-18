import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemDeviceFilledIcon],svg[tdesign-system-device-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H8v5h5v15h9z"></svg:path><svg:path fill="currentColor" d="M2 9h9v12.998H2zm3 8v2h3v-2z"></svg:path>`,
})
export class TdesignSystemDeviceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
