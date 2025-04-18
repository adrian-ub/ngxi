import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneGlowingStarIcon],svg[emojione-glowing-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffce31" d="M62 23H39.1L32 2l-7.1 21H2l18.5 13l-7.1 21L32 44l18.5 13l-7.1-21z"></svg:path><svg:path fill="#ffdf85" d="m46.2 20.3l4-11.4l-10.5 7.2l1.5 4.2zM27.9 50L32 62l4.1-12l-4.1-2.8zm22.8-15.7l-3.8 2.6l1.6 4.8h12.9zM24.3 16.1L13.8 8.9l4 11.4h5zm-11 18.2L2.6 41.7h12.9l1.6-4.8z"></svg:path>`,
})
export class EmojioneGlowingStarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
