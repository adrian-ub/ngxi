import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDeviceRecoverFillIcon],svg[ri-device-recover-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-7 5a5 5 0 1 0 .955 9.909L12 15a3 3 0 1 1 0-6c1.598 0 3 1.34 3 3h-2.5l2.128 4.254A5 5 0 0 0 12 7"></svg:path>`,
})
export class RiDeviceRecoverFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
