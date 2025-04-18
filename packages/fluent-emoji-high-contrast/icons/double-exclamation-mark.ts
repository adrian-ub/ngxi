import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastDoubleExclamationMarkIcon],svg[fluent-emoji-high-contrast-double-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20.513a2.5 2.5 0 0 0 5 0V4.487a2.5 2.5 0 0 0-5 0zm0 6.917c0 1.41 1.15 2.56 2.56 2.56s2.56-1.15 2.56-2.56s-1.15-2.56-2.56-2.56S10 26.02 10 27.43m9.56 2.56c-1.41 0-2.56-1.15-2.56-2.56s1.15-2.56 2.56-2.56s2.56 1.15 2.56 2.56s-1.15 2.56-2.56 2.56M17 20.513a2.5 2.5 0 0 0 5 0V4.487a2.5 2.5 0 0 0-5 0z"></svg:path>`,
})
export class FluentEmojiHighContrastDoubleExclamationMarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
