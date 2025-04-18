import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiMeh16RegularIcon],svg[fluent-emoji-meh-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7a.75.75 0 1 1-1.5 0A.75.75 0 0 1 7 7m2.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2-7a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3"></svg:path>`,
})
export class FluentEmojiMeh16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
