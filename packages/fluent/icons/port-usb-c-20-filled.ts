import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPortUsbC20FilledIcon],svg[fluent-port-usb-c-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 10a2 2 0 0 1 2-2h7a2 2 0 1 1 0 4h-7a2 2 0 0 1-2-2"></svg:path>`,
})
export class FluentPortUsbC20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
