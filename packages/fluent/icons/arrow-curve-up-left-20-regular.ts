import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCurveUpLeft20RegularIcon],svg[fluent-arrow-curve-up-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.854 6.854a.5.5 0 1 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L10 3.707V10c0 1.965.247 3.38.764 4.473c.512 1.08 1.308 1.887 2.493 2.598a.5.5 0 0 1-.514.858c-1.315-.79-2.269-1.732-2.882-3.027C9.253 13.619 9 12.035 9 10V3.707z"></svg:path>`,
})
export class FluentArrowCurveUpLeft20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
