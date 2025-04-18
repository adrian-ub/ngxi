import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnDeviceTabletIcon],svg[typcn-device-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3.5a1 1 0 1 0 2 0H17c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1m0 13H8V5h9zm1-16H7C5.346 1 4 2.346 4 4v15c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3m1 18c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1V4c0-.551.449-1 1-1h11c.551 0 1 .449 1 1z"></svg:path>`,
})
export class TypcnDeviceTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
