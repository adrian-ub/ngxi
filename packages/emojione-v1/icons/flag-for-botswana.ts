import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForBotswanaIcon],svg[emojione-v1-flag-for-botswana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#25333a" d="M0 25h64v14H0z"></svg:path><svg:path fill="#e6e7e8" d="M0 23h64v4H0zm0 14h64v4H0z"></svg:path><svg:path fill="#75aadb" d="M54 10H10C3.373 10 0 14.925 0 21v2h64v-2c0-6.075-3.373-11-10-11M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-2H0z"></svg:path>`,
})
export class EmojioneV1FlagForBotswanaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
