import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FastUpButtonIcon],svg[emojione-v1-fast-up-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1b75bb" d="M64 57.1a6.9 6.9 0 0 1-6.9 6.904H6.9A6.9 6.9 0 0 1 .004 57.1V6.9C.004 3.09 3.092 0 6.9 0h50.2A6.9 6.9 0 0 1 64 6.9z"></svg:path><svg:g fill="#fff"><svg:path d="M48.48 52.25c-.156 2.317-1.171 4.253-2.557 5.101H18.249c-1.39-.852-2.405-2.791-2.559-5.112l16.337-22.434z"></svg:path><svg:path d="M48.48 29.27c-.156 2.318-1.171 4.253-2.557 5.101H18.249c-1.39-.852-2.405-2.791-2.559-5.112L32.028 6.824z"></svg:path></svg:g>`,
})
export class EmojioneV1FastUpButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
