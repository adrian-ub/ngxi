import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForSurinameIcon],svg[emojione-v1-flag-for-suriname-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#137a08" d="M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-3H0zm54-33H10C3.373 10 0 14.925 0 21v3h64v-3c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#ec1c24" d="M0 24h64v16H0z"></svg:path><svg:path fill="#e6e7e8" d="M0 21h64v3H0zm0 19h64v3H0z"></svg:path><svg:path fill="#f9cb38" d="m39.39 30.15l-5.689.01l-1.763-5.755l-1.748 5.755l-5.692-.01l4.612 3.496l-1.79 5.714l4.627-3.55l4.627 3.55l-1.79-5.714z"></svg:path>`,
})
export class EmojioneV1FlagForSurinameIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
