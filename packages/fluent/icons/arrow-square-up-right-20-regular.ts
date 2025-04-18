import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSquareUpRight20RegularIcon],svg[fluent-arrow-square-up-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8.691 1.038q.088.036.16.106l.005.005A.5.5 0 0 1 13 7.5v5a.5.5 0 0 1-1 0V8.707l-4.146 4.147a.5.5 0 0 1-.708-.708L11.293 8H7.5a.5.5 0 0 1 0-1h5q.102 0 .191.038"></svg:path>`,
})
export class FluentArrowSquareUpRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
