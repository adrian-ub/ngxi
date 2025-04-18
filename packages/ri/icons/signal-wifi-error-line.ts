import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiErrorLineIcon],svg[ri-signal-wifi-error-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996l-1.256 1.556A15.93 15.93 0 0 0 12 5c-3.09 0-5.974.875-8.42 2.392L12 17.817l6-7.429v3.183L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m10 16v2h-2v-2zm0-9v7h-2v-7z"></svg:path>`,
})
export class RiSignalWifiErrorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
