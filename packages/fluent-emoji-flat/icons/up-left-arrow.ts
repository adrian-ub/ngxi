import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatUpLeftArrowIcon],svg[fluent-emoji-flat-up-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M9 9.754A.75.75 0 0 1 9.754 9l7.293.037a.75.75 0 0 1 .526 1.28l-1.916 1.917c-.127.127-.081.348.049.472l.018.018l7.586 7.586a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-7.586-7.586l-.018-.018c-.124-.13-.345-.176-.472-.05l-1.916 1.917a.75.75 0 0 1-1.28-.526z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatUpLeftArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
