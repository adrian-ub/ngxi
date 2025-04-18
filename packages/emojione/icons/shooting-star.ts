import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneShootingStarIcon],svg[emojione-shooting-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f5a300" d="m7 31l14.1 10.3L14.2 62l17.9-12.8l18 12.8L57 2z"></svg:path><svg:path id="emojioneShootingStar0" fill="#fff" d="m38.9 39.9l10.9-7.8H36.3l-4.2-12.6L28 32.1H14.5l10.9 7.8l-4.1 12.6l10.8-7.8L43 52.5z"></svg:path><svg:use href="#emojioneShootingStar0"></svg:use><svg:path fill="#ffce31" d="M39 28.4h3.5L57 2L37.8 24.7zM57 2L34.6 15l1.8 5.6zm-3.1 26.4L57 2l-9.8 26.4z"></svg:path>`,
})
export class EmojioneShootingStarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
