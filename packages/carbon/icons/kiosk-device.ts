import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonKioskDeviceIcon],svg[carbon-kiosk-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 19c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7v9H4v2h24v-2h-9v-9zm-9 9h-2v-9h2zM6 17V4h20v13zm10-4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class CarbonKioskDeviceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
