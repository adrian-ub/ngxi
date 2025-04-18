import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleChevronUp12Icon],svg[fluent-mdl2-double-chevron-up-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 291l-878 879l-121-121l999-999l999 999l-121 121zM25 1902l999-999l999 999l-121 121l-878-878l-878 878z"></svg:path>`,
})
export class FluentMdl2DoubleChevronUp12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
