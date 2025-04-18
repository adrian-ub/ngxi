import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPortMicroUsb24FilledIcon],svg[fluent-port-micro-usb-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12.83V13a2.006 2.006 0 0 1-2 2H7a2.006 2.006 0 0 1-2-2v-.17a2 2 0 0 1 .59-1.42l1.82-1.82A2 2 0 0 1 8.83 9h6.34a2 2 0 0 1 1.42.59l1.82 1.82a2 2 0 0 1 .59 1.42"></svg:path>`,
})
export class FluentPortMicroUsb24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
