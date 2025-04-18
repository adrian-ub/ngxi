import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneSevenOclockIcon],svg[emojione-seven-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#62727a"></svg:circle><svg:g fill="#fff"><svg:path d="M30 6h4v32h-4z"></svg:path><svg:path d="m33.4 26l3.6 1.9L24.6 48L21 46.1z"></svg:path><svg:circle cx="32" cy="32" r="4"></svg:circle></svg:g><svg:circle cx="32" cy="32" r="3" fill="#62727a"></svg:circle>`,
})
export class EmojioneSevenOclockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
