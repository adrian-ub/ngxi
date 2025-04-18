import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleChevronDown12Icon],svg[fluent-mdl2-double-chevron-down-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 1757l878-879l121 121l-999 999L25 999l121-121zm999-1611l-999 999L25 146L146 25l878 878l878-878z"></svg:path>`,
})
export class FluentMdl2DoubleChevronDown12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
