import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleChevronRight12Icon],svg[fluent-mdl2-double-chevron-right-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m999 25l999 999l-999 999l-121-121l879-878l-879-878zm-853 0l999 999l-999 999l-121-121l878-878L25 146z"></svg:path>`,
})
export class FluentMdl2DoubleChevronRight12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
