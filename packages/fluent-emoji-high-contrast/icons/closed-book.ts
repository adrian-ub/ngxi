import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastClosedBookIcon],svg[fluent-emoji-high-contrast-closed-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 1.5a2 2 0 0 0-2 2v25a2 2 0 0 0 2 2h19a2 2 0 0 0 1.886-1.333l.236-.667H7a.5.5 0 0 1 0-1h20.5V4A2.5 2.5 0 0 0 25 1.5zm20 24h-18v-23H25A1.5 1.5 0 0 1 26.5 4z"></svg:path>`,
})
export class FluentEmojiHighContrastClosedBookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
