import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWhiteCircleIcon],svg[emojione-white-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#d0d0d0"></svg:circle>`,
})
export class EmojioneWhiteCircleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
