import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUsbIcon],svg[picon-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8c-4-1-4-6 0-7m.5 1H8v5H3.5M5 4h1V3H5m0 3h1V5H5"></svg:path>`,
})
export class PiconUsbIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
