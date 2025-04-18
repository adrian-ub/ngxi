import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1DownRightArrowIcon],svg[emojione-v1-down-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1b75bb" d="M64 57.1a6.9 6.9 0 0 1-6.898 6.903H6.892A6.9 6.9 0 0 1-.004 57.1V6.9A6.9 6.9 0 0 1 6.892.001h50.21A6.9 6.9 0 0 1 64 6.9z"></svg:path><svg:path fill="#fff" d="m47.972 23.11l2.205 24.353l-24.339-1.267c-1.715-1.932-1.975-4.567-.521-6.082l2.467-2.569l-12.07-11.578a5.103 5.103 0 0 1-.152-7.208l4.58-4.768a5.1 5.1 0 0 1 7.208-.15L39.41 25.42l2.463-2.573c1.453-1.511 4.093-1.365 6.094.263"></svg:path>`,
})
export class EmojioneV1DownRightArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
