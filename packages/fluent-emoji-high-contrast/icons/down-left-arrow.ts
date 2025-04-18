import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastDownLeftArrowIcon],svg[fluent-emoji-high-contrast-down-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.754 23A.75.75 0 0 1 8 22.246l.037-7.293a.75.75 0 0 1 1.28-.526l1.917 1.916c.127.127.348.081.472-.049l.018-.018L19.31 8.69a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414l-7.586 7.586l-.018.018c-.13.124-.176.345-.05.472l1.917 1.917a.75.75 0 0 1-.526 1.28z"></svg:path><svg:path d="M1 6a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastDownLeftArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
