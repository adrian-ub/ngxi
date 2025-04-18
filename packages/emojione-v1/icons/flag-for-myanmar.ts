import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForMyanmarIcon],svg[emojione-v1-flag-for-myanmar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#137a08" d="M0 25h64v14H0z"></svg:path><svg:path fill="#f9cb38" d="M54 10H10C3.373 10 0 14.925 0 21v4h64v-4c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#ec1c24" d="M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-4H0z"></svg:path><svg:path fill="#e6e7e8" d="m48.607 27.329l-12.597.021l-3.9-12.743l-3.88 12.743l-12.607-.021l10.21 7.761l-3.959 12.654l10.246-7.865l10.26 7.865l-3.97-12.654z"></svg:path>`,
})
export class EmojioneV1FlagForMyanmarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
