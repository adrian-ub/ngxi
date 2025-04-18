import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPortUsbA24FilledIcon],svg[fluent-port-usb-a-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8H6a2.006 2.006 0 0 0-2 2v4a2.006 2.006 0 0 0 2 2h12a2.006 2.006 0 0 0 2-2v-4a2.006 2.006 0 0 0-2-2M6 10h12v2H6z"></svg:path>`,
})
export class FluentPortUsbA24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
