import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowTopLeftIcon],svg[gg-arrow-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.475 5.495l.004 2l-4.557.01l9.603 9.585l-1.412 1.415l-9.63-9.61l.01 4.614l-2 .004l-.018-8z"></svg:path>`,
})
export class GgArrowTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
