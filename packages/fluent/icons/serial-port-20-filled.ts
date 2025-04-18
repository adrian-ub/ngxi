import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSerialPort20FilledIcon],svg[fluent-serial-port-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.334 9.067A2.5 2.5 0 0 1 4.769 6h10.46a2.5 2.5 0 0 1 2.435 3.068l-.7 3A2.5 2.5 0 0 1 14.529 14H5.467a2.5 2.5 0 0 1-2.435-1.933zM6 9.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M8.5 9a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M7 11.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M10 9.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class FluentSerialPort20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
