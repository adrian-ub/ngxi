import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneBlackHeartIcon],svg[emojione-monotone-black-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.072 18.16c-6.395-16.919-27.154-9.328-29.074-.879c-2.64-9.004-22.89-15.721-29.07.891C-3.953 36.674 29.598 53.279 31.999 56c2.397-2.162 35.951-19.639 29.073-37.84"></svg:path>`,
})
export class EmojioneMonotoneBlackHeartIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
