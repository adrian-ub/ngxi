import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForLatviaIcon],svg[emojione-v1-flag-for-latvia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e6e7e8" d="M0 27h64v10H0z"></svg:path><svg:path fill="#972f37" d="M54 10H10C3.373 10 0 14.925 0 21v6h64v-6c0-6.075-3.373-11-10-11M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-6H0z"></svg:path>`,
})
export class EmojioneV1FlagForLatviaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
