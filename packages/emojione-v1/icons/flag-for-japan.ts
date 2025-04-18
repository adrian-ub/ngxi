import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForJapanIcon],svg[emojione-v1-flag-for-japan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e6e7e8" d="M64 43c0 6.075-3.373 11-10 11H10C3.373 54 0 49.075 0 43V21c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11z"></svg:path><svg:path fill="#ec1c24" d="M43.971 32.569c0 6.294-5.104 11.4-11.4 11.4c-6.292 0-11.395-5.105-11.395-11.4s5.103-11.398 11.395-11.398c6.295 0 11.4 5.103 11.4 11.398"></svg:path>`,
})
export class EmojioneV1FlagForJapanIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
