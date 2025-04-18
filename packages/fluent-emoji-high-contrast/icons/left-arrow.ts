import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastLeftArrowIcon],svg[fluent-emoji-high-contrast-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.417 16.944a1 1 0 0 1 0-1.387l5.113-5.313c.624-.649 1.72-.207 1.72.693V14c0 .138.112.25.25.25h9.75a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H14.5a.25.25 0 0 0-.25.25v3.063c0 .9-1.096 1.342-1.72.693z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastLeftArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
