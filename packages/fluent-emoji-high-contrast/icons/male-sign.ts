import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastMaleSignIcon],svg[fluent-emoji-high-contrast-male-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.781 7a1 1 0 0 1 1-1H25a1 1 0 0 1 1 1v4.297a1 1 0 1 1-2 0V9.523l-3.465 3.508a8 8 0 1 1-1.41-1.418L22.693 8H20.78a1 1 0 0 1-1-1M8.203 17.922a6 6 0 1 0 12 0a6 6 0 0 0-12 0"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastMaleSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
