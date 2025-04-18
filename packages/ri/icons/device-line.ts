import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDeviceLineIcon],svg[ri-device-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-2 0V4H5v14h7V9a1 1 0 0 1 1-1zm-3 2v10h6V10z"></svg:path>`,
})
export class RiDeviceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
