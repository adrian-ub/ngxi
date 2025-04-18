import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatUpRightArrowIcon],svg[fluent-emoji-flat-up-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M23.016 10.005A1 1 0 0 0 22.01 9l-6.441.033c-.889.004-1.33 1.079-.703 1.707l1.493 1.493c.127.127.081.348-.049.472l-.018.018l-7.586 7.585a1 1 0 0 0 0 1.415l1.586 1.585a1 1 0 0 0 1.414 0l7.586-7.585l.018-.019c.123-.13.345-.176.472-.049l1.493 1.493c.628.628 1.702.187 1.707-.702z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatUpRightArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
