import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSignalWifi1FillIcon],svg[ri-signal-wifi-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 2a15.9 15.9 0 0 0-8.42 2.392l5.109 6.324A8 8 0 0 1 12 13c1.18 0 2.302.256 3.311.716L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifi1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
