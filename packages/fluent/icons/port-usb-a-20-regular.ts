import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPortUsbA20RegularIcon],svg[fluent-port-usb-a-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 7A1.5 1.5 0 0 0 3 8.5v3A1.5 1.5 0 0 0 4.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 15.5 7zM4 8.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V10H4z"></svg:path>`,
})
export class FluentPortUsbA20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
