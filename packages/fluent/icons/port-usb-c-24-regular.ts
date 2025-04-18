import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPortUsbC24RegularIcon],svg[fluent-port-usb-c-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10.5a1.5 1.5 0 1 1 0 3H8a1.5 1.5 0 1 1 0-3zM16 9H8a3 3 0 1 0 0 6h8a3 3 0 0 0 0-6"></svg:path>`,
})
export class FluentPortUsbC24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
