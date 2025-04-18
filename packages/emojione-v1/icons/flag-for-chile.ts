import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForChileIcon],svg[emojione-v1-flag-for-chile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec1c24" d="M0 32v11c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11V32z"></svg:path><svg:path fill="#e6e7e8" d="M54 10H23v22h41V21c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#2b3990" d="M23 10H10C3.373 10 0 14.925 0 21v11h23z"></svg:path><svg:path fill="#e6e7e8" d="m11.52 13.997l2.247 4.554l5.03.739l-3.638 3.548l.86 5l-4.5-2.364l-4.5 2.364l.86-5L4.24 19.29l5.03-.739z"></svg:path>`,
})
export class EmojioneV1FlagForChileIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
