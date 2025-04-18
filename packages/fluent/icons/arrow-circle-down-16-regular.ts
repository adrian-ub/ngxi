import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleDown16RegularIcon],svg[fluent-arrow-circle-down-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.146 8.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L8.5 9.793V5a.5.5 0 0 0-1 0v4.793L5.854 8.146a.5.5 0 1 0-.708.708M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8"></svg:path>`,
})
export class FluentArrowCircleDown16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
