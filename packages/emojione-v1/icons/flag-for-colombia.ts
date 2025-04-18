import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForColombiaIcon],svg[emojione-v1-flag-for-colombia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2b3990" d="M0 25h64v17H0z"></svg:path><svg:path fill="#f9cb38" d="M54 10H10C3.373 10 0 14.925 0 21v11h64V21c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#ec1c24" d="M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-1H0z"></svg:path>`,
})
export class EmojioneV1FlagForColombiaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
