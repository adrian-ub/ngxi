import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUsbCPortIcon],svg[mdi-usb-c-port-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3h12c1.66 0 3-1.34 3-3s-1.34-3-3-3zm0-2h12c2.76 0 5 2.24 5 5s-2.24 5-5 5H6c-2.76 0-5-2.24-5-5s2.24-5 5-5"></svg:path>`,
})
export class MdiUsbCPortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
