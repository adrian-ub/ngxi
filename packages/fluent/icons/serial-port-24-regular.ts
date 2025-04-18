import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSerialPort24RegularIcon],svg[fluent-serial-port-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-2 3.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M12 11.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M4.907 6.999a2.75 2.75 0 0 0-2.675 3.387l1.072 4.501A2.75 2.75 0 0 0 5.979 17h12.039a2.75 2.75 0 0 0 2.675-2.111l1.074-4.502A2.75 2.75 0 0 0 19.092 7zm-1.216 3.04a1.25 1.25 0 0 1 1.217-1.54h14.184a1.25 1.25 0 0 1 1.216 1.54l-1.074 4.502a1.25 1.25 0 0 1-1.216.96H5.979a1.25 1.25 0 0 1-1.216-.961z"></svg:path>`,
})
export class FluentSerialPort24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
