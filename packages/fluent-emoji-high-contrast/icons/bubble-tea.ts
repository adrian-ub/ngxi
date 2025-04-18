import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastBubbleTeaIcon],svg[fluent-emoji-high-contrast-bubble-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.65 23.62a1.31 1.31 0 1 0 0-2.62a1.31 1.31 0 0 0 0 2.62m-3.99-1.31a1.31 1.31 0 1 1-2.62 0a1.31 1.31 0 0 1 2.62 0m2.91 3.3a1.31 1.31 0 1 1-2.62 0a1.31 1.31 0 0 1 2.62 0m-5.26 1.31a1.31 1.31 0 1 0 0-2.62a1.31 1.31 0 0 0 0 2.62"></svg:path><svg:path d="M17 2v5h8a1 1 0 1 1 0 2l-2 20c-.097.605-.5 1-1 1H10c-.5 0-.924-.437-1-1L7 9a1 1 0 0 1 0-2h8V2zm-7.765 9.25L10.91 28h10.18l.16-1.592a1.31 1.31 0 1 1 .137-1.374l1.378-13.784z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastBubbleTeaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
