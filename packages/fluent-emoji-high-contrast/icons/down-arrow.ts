import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastDownArrowIcon],svg[fluent-emoji-high-contrast-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9.75c0 .138.112.25.25.25h3.063c.9 0 1.342 1.096.693 1.72l-5.313 5.113a1 1 0 0 1-1.386 0L9.994 19.72c-.649-.625-.207-1.721.693-1.721h3.063a.25.25 0 0 0 .25-.25z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastDownArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
