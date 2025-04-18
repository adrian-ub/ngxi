import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForFinlandIcon],svg[emojione-v1-flag-for-finland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e6e7e8" d="M64 43c0 6.075-3.373 11-10 11H10C3.373 54 0 49.075 0 43V21c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11z"></svg:path><svg:path fill="#2b3990" d="M18 10h11v44H18z"></svg:path><svg:path fill="#2b3990" d="M0 27h64v10H0z"></svg:path>`,
})
export class EmojioneV1FlagForFinlandIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
