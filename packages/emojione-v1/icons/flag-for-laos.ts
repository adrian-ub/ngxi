import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForLaosIcon],svg[emojione-v1-flag-for-laos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2e3192" d="M0 23h64v18H0z"></svg:path><svg:path fill="#ec1c24" d="M54 10H10C3.373 10 0 14.925 0 21v2h64v-2c0-6.075-3.373-11-10-11M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-2H0z"></svg:path><svg:circle cx="31.979" cy="31.959" r="8.291" fill="#e6e7e8"></svg:circle>`,
})
export class EmojioneV1FlagForLaosIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
