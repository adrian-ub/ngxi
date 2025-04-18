import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCurveDownRight20RegularIcon],svg[fluent-arrow-curve-down-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.743 2.929a.5.5 0 1 1 .514-.858c1.315.79 2.269 1.732 2.882 3.028C10.747 6.38 11 7.965 11 10v6.293l3.146-3.146a.5.5 0 0 1 .708.707l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.707L10 16.293V10c0-1.965-.247-3.38-.764-4.473c-.512-1.08-1.308-1.887-2.493-2.598"></svg:path>`,
})
export class FluentArrowCurveDownRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
