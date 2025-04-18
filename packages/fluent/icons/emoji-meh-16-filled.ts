import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiMeh16FilledIcon],svg[fluent-emoji-meh-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8m5-1a.75.75 0 1 1-1.5 0A.75.75 0 0 1 7 7m3.5 0A.75.75 0 1 1 9 7a.75.75 0 0 1 1.5 0M6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentEmojiMeh16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
