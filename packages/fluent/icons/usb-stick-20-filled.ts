import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentUsbStick20FilledIcon],svg[fluent-usb-stick-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM8 6h4V3H8z"></svg:path>`,
})
export class FluentUsbStick20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
