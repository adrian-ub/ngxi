import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSerialPort24FilledIcon],svg[fluent-serial-port-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.231 10.386a2.75 2.75 0 0 1 2.676-3.387H19.09a2.75 2.75 0 0 1 2.675 3.388l-1.074 4.502A2.75 2.75 0 0 1 18.017 17H5.978a2.75 2.75 0 0 1-2.675-2.113zM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m-2 3.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m1.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0M12 11.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m1.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class FluentSerialPort24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
