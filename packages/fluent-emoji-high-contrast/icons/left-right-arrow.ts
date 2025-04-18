import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastLeftRightArrowIcon],svg[fluent-emoji-high-contrast-left-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.167 15.307a1 1 0 0 0 0 1.386l5.113 5.313c.624.649 1.72.207 1.72-.693V18.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v3.063c0 .9 1.096 1.342 1.72.693l5.113-5.313a1 1 0 0 0 0-1.386L20.72 9.994c-.625-.649-1.721-.207-1.721.693v3.063a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-3.063c0-.9-1.096-1.342-1.72-.693z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastLeftRightArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
