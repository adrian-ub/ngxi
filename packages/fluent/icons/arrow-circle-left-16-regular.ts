import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleLeft16RegularIcon],svg[fluent-arrow-circle-left-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.146 10.854l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l1.647 1.646a.5.5 0 0 1-.708.708M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m7 6A6 6 0 1 1 8 2a6 6 0 0 1 0 12"></svg:path>`,
})
export class FluentArrowCircleLeft16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
