import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleOff16FilledIcon],svg[fluent-circle-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.874 12.582l2.272 2.272a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l2.272 2.272a6 6 0 0 0 8.456 8.456M14 8a5.97 5.97 0 0 1-.83 3.048L4.951 2.83A6 6 0 0 1 14 8"></svg:path>`,
})
export class FluentCircleOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
