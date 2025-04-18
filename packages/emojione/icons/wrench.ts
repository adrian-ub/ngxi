import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWrenchIcon],svg[emojione-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#94989b" d="m47.4 47.4l7.5-2l8.8 8.8c1-4.2-.1-8.9-3.4-12.2s-7.9-4.4-12.2-3.4L25.4 16c1-4.2-.1-8.9-3.4-12.2S14.1-.6 9.8.4l8.8 8.8l-2 7.5l-7.5 2L.4 9.8c-1 4.2.1 8.9 3.4 12.2s7.9 4.4 12.2 3.4L38.6 48c-1 4.2.1 8.9 3.4 12.2s7.9 4.4 12.2 3.4l-8.8-8.8z"></svg:path>`,
})
export class EmojioneWrenchIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
