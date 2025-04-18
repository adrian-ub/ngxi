import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1TwoThirtyIcon],svg[emojione-v1-two-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="scale(.99878)"><svg:circle cx="32.04" cy="32.04" r="29.68" fill="#e0e7ec"></svg:circle><svg:path fill="#98a9b4" d="M32.04 0C14.374 0 0 14.372 0 32.04c0 17.666 14.374 32.04 32.04 32.04s32.04-14.372 32.04-32.04S49.708 0 32.04 0m0 57.843c-14.228 0-25.803-11.575-25.803-25.803S17.812 6.237 32.04 6.237c14.226 0 25.801 11.575 25.801 25.803S46.266 57.843 32.04 57.843"></svg:path><svg:path fill="#85939c" d="M33.92 53.02c0 1.44-.85 2.606-1.893 2.606s-1.893-1.166-1.893-2.606V31.91c0-1.443.849-2.609 1.893-2.609c1.043 0 1.893 1.166 1.893 2.609z"></svg:path><svg:path fill="#788288" d="M43.45 20.08c1.143-.875 2.585-.919 3.221-.091s.229 2.216-.912 3.091l-12.11 9.315c-1.139.876-2.583.916-3.218.087c-.638-.826-.23-2.21.91-3.089l12.11-9.313"></svg:path></svg:g>`,
})
export class EmojioneV1TwoThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
