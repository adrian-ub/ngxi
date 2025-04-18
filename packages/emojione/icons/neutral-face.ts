import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneNeutralFaceIcon],svg[emojione-neutral-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#664e27"><svg:circle cx="20.5" cy="27.6" r="5"></svg:circle><svg:circle cx="43.5" cy="27.6" r="5"></svg:circle><svg:path d="M38.9 48H25.1c-1.5 0-1.5-4 0-4h13.7c1.6 0 1.6 4 .1 4"></svg:path></svg:g>`,
})
export class EmojioneNeutralFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
