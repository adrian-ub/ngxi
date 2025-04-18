import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPortMicroUsb20RegularIcon],svg[fluent-port-micro-usb-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.433 8.3a1.5 1.5 0 0 1 .9-.3h5.334c.324 0 .64.105.9.3l1.333 1A1.5 1.5 0 0 1 14 12H6a1.5 1.5 0 0 1-.9-2.7zm.9.7a.5.5 0 0 0-.3.1l-1.333 1a.5.5 0 0 0 .3.9h8a.5.5 0 0 0 .3-.9l-1.333-1a.5.5 0 0 0-.3-.1z"></svg:path>`,
})
export class FluentPortMicroUsb20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
