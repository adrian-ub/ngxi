import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleDown12RegularIcon],svg[fluent-arrow-circle-down-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.354 6.098a.5.5 0 0 0-.708 0L6.5 7.244V3.5a.5.5 0 0 0-1 0v3.744L4.354 6.098a.5.5 0 1 0-.708.707l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.707M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10m4-5a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class FluentArrowCircleDown12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
