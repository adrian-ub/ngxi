import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconDeviceCamera16Icon],svg[octicon-device-camera-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1Zm-4.5 9c1.94 0 3.5-1.56 3.5-3.5S12.44 5 10.5 5S7 6.56 7 8.5S8.56 12 10.5 12M13 8.5c0 1.38-1.13 2.5-2.5 2.5S8 9.87 8 8.5S9.13 6 10.5 6S13 7.13 13 8.5M6 5V4H2v1Z"></svg:path>`,
})
export class OcticonDeviceCamera16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
