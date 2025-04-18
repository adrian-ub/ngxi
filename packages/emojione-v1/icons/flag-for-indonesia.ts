import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForIndonesiaIcon],svg[emojione-v1-flag-for-indonesia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e6e7e8" d="M54 54H10C3.373 54 0 49.075 0 43V32h64v11c0 6.075-3.373 11-10 11"></svg:path><svg:path fill="#ec1c24" d="M0 21c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11v11H0z"></svg:path>`,
})
export class EmojioneV1FlagForIndonesiaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
