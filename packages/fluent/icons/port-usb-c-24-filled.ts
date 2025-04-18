import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPortUsbC24FilledIcon],svg[fluent-port-usb-c-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12a2.996 2.996 0 0 1-3 3H8a3 3 0 0 1 0-6h8a2.996 2.996 0 0 1 3 3"></svg:path>`,
})
export class FluentPortUsbC24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
