import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnDeviceDesktopIcon],svg[typcn-device-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H3C1.346 1 0 2.346 0 4v11c0 1.654 1.346 3 3 3h6v2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-3v-2h6c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3m-7 19h-4v-2h4zm8-5c0 .551-.449 1-1 1H3c-.551 0-1-.449-1-1V4c0-.551.449-1 1-1h18c.551 0 1 .449 1 1zM20 4H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1m0 9H4V5h16z"></svg:path>`,
})
export class TypcnDeviceDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
