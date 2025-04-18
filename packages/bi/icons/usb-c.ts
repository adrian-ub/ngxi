import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biUsbCIcon],svg[bi-usb-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3.5 7.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"></svg:path><svg:path d="M0 8a3 3 0 0 1 3-3h10a3 3 0 1 1 0 6H3a3 3 0 0 1-3-3m3-2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4z"></svg:path></svg:g>`,
})
export class BiUsbCIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
