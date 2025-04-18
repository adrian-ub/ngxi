import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDeviceRecoverLineIcon],svg[ri-device-recover-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-1 2H6v16h12zm-6 3a5 5 0 0 1 2.628 9.254L12.5 12H15a3 3 0 1 0-3 3l.955 1.909q-.464.09-.955.091a5 5 0 0 1 0-10"></svg:path>`,
})
export class RiDeviceRecoverLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
