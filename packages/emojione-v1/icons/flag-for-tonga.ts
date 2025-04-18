import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForTongaIcon],svg[emojione-v1-flag-for-tonga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec1c24" d="M54 10H22v22H0v11c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11V21c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#e6e7e8" d="M22 10H10C3.373 10 0 14.925 0 21v11h22z"></svg:path><svg:path fill="#ec1c24" d="M14 19v-5H8v5H3v6h5v5h6v-5h5v-6z"></svg:path>`,
})
export class EmojioneV1FlagForTongaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
