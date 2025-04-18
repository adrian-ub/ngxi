import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneYellowHeartIcon],svg[emojione-yellow-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f5ce3e" d="M61.1 18.2c-6.4-17-27.2-9.4-29.1-.9c-2.6-9-22.9-15.7-29.1.9C-4 36.7 29.6 53.3 32 56c2.4-2.2 36-19.6 29.1-37.8"></svg:path>`,
})
export class EmojioneYellowHeartIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
