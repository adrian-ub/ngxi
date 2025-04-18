import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBlueCircleIcon],svg[emojione-blue-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#0071bc"></svg:circle>`,
})
export class EmojioneBlueCircleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
