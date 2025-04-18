import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatDownRightArrowIcon],svg[fluent-emoji-flat-down-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="m8.707 10.293l1.586-1.586a1 1 0 0 1 1.414 0l7.586 7.586l.018.018c.123.13.345.176.472.05l1.493-1.494c.628-.628 1.702-.186 1.707.702l.033 6.442a1 1 0 0 1-1.005 1.005l-6.442-.033c-.888-.005-1.33-1.08-.702-1.707l1.493-1.493c.127-.127.081-.349-.049-.472l-.018-.018l-7.586-7.586a1 1 0 0 1 0-1.414"></svg:path></svg:g>`,
})
export class FluentEmojiFlatDownRightArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
