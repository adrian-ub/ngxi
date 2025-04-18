import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneEggIcon],svg[emojione-monotone-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.56 29.807C51.111 11.768 39.666 2 32 2c-7.668 0-19.112 9.768-21.559 27.807C7.988 47.842 15.853 62 32 62c16.146 0 24.013-14.158 21.56-32.193"></svg:path>`,
})
export class EmojioneMonotoneEggIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
