import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneThreeOclockIcon],svg[emojione-three-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#62727a"></svg:circle><svg:g fill="#fff"><svg:path d="M30 6h4v32h-4z"></svg:path><svg:path d="M26 30h24v4H26z"></svg:path><svg:circle cx="32" cy="32" r="4"></svg:circle></svg:g><svg:circle cx="32" cy="32" r="3" fill="#62727a"></svg:circle>`,
})
export class EmojioneThreeOclockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
