import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneElevenThirtyIcon],svg[emojione-eleven-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#62727a"></svg:circle><svg:g fill="#fff"><svg:path d="M30 26h4v32h-4z"></svg:path><svg:path d="m35.4 37l-3.8 1l-6.2-23l3.8-1z"></svg:path><svg:circle cx="32" cy="32" r="4"></svg:circle></svg:g><svg:circle cx="32" cy="32" r="3" fill="#62727a"></svg:circle>`,
})
export class EmojioneElevenThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
