import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneSlightlySmilingFaceIcon],svg[emojione-slightly-smiling-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#664e27"><svg:circle cx="20.5" cy="26.6" r="5"></svg:circle><svg:circle cx="43.5" cy="26.6" r="5"></svg:circle><svg:path d="M44.6 40.3c-8.1 5.7-17.1 5.6-25.2 0c-1-.7-1.8.5-1.2 1.6c2.5 4 7.4 7.7 13.8 7.7s11.3-3.6 13.8-7.7c.6-1.1-.2-2.3-1.2-1.6"></svg:path></svg:g>`,
})
export class EmojioneSlightlySmilingFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
