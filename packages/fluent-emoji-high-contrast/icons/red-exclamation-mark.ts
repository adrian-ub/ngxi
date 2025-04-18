import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastRedExclamationMarkIcon],svg[fluent-emoji-high-contrast-red-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20.513a2.501 2.501 0 0 0 5 0V4.487a2.501 2.501 0 0 0-5 0zm0 6.987c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5a2.51 2.51 0 0 0-2.5 2.5"></svg:path>`,
})
export class FluentEmojiHighContrastRedExclamationMarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
