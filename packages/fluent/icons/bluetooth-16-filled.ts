import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBluetooth16FilledIcon],svg[fluent-bluetooth-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.415 1.08a.75.75 0 0 1 .785.07l4 3a.75.75 0 0 1 .023 1.182L8.939 8l3.284 2.668a.75.75 0 0 1-.023 1.182l-4 3a.75.75 0 0 1-1.2-.6V9.576l-2.777 2.256a.75.75 0 0 1-.946-1.164L6.561 8L3.277 5.332a.75.75 0 1 1 .946-1.164L7 6.424V1.75a.75.75 0 0 1 .415-.67M8.5 9.575v3.174l2.032-1.524zm0-3.152l2.032-1.65L8.5 3.25z"></svg:path>`,
})
export class FluentBluetooth16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
