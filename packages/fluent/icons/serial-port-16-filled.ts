import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSerialPort16FilledIcon],svg[fluent-serial-port-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.078 7.47A2 2 0 0 1 3.022 5h9.97a2 2 0 0 1 1.944 2.47l-.726 3A2 2 0 0 1 12.266 12h-8.52a2 2 0 0 1-1.943-1.53zM5 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m1.5 1.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M8 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M7 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M11 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class FluentSerialPort16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
