import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBluetooth16RegularIcon],svg[fluent-bluetooth-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.285 1.049a.5.5 0 0 1 .53.063l4 3.25a.5.5 0 0 1 0 .776L8.293 8l3.522 2.862a.5.5 0 0 1 0 .776l-4 3.25A.5.5 0 0 1 7 14.5V9.05l-3.185 2.588a.5.5 0 0 1-.63-.776L6.707 8L3.185 5.138a.5.5 0 1 1 .63-.776L7 6.95V1.5a.5.5 0 0 1 .285-.451M8 9.05v4.4l2.707-2.2zm0-2.1l2.707-2.2L8 2.55z"></svg:path>`,
})
export class FluentBluetooth16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
