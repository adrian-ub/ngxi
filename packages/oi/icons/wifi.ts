import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiWifiIcon],svg[oi-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 0C2.37 0 1.09.4 0 1.09l.53.81c.93-.59 2.03-.91 3.22-.91c1.2 0 2.32.31 3.25.91l.53-.81C6.44.39 5.13 0 3.75 0m0 3c-.79 0-1.5.23-2.13.63l.53.84c.47-.3 1-.47 1.59-.47s1.16.17 1.63.47l.53-.84C5.28 3.24 4.53 3 3.74 3zm0 3c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class OiWifiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
