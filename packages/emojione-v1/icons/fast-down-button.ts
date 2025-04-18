import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FastDownButtonIcon],svg[emojione-v1-fast-down-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1b75bb" d="M64 57.1a6.9 6.9 0 0 1-6.898 6.904H6.892A6.9 6.9 0 0 1-.004 57.1V6.9c0-3.81 3.088-6.9 6.896-6.9h50.21A6.9 6.9 0 0 1 64 6.9z"></svg:path><svg:g fill="#fff"><svg:path d="M15.685 11.924c.156-2.318 1.171-4.253 2.557-5.101h27.674c1.39.852 2.404 2.791 2.559 5.113L32.134 34.369z"></svg:path><svg:path d="M15.685 34.901c.156-2.318 1.171-4.253 2.557-5.101h27.674c1.39.851 2.404 2.791 2.559 5.112L32.134 57.347z"></svg:path></svg:g>`,
})
export class EmojioneV1FastDownButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
