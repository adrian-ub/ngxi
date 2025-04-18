import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForArmeniaIcon],svg[emojione-v1-flag-for-armenia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0033a0" d="M0 26h64v14H0z"></svg:path><svg:path fill="#d90012" d="M54 11H10C3.373 11 0 15.925 0 22v4h64v-4c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#f2a800" d="M0 44c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-4H0z"></svg:path>`,
})
export class EmojioneV1FlagForArmeniaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
