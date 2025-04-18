import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLetterPIcon],svg[emojione-letter-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M41.4 33.9c-1.7 1.4-4.1 2.1-7.3 2.1h-6v10.4h-6v-29h12.5c2.9 0 5.2.7 6.9 2.2s2.6 3.8 2.6 6.9c-.2 3.6-1 6-2.7 7.4m-4.6-10.4c-.8-.6-1.8-1-3.2-1h-5.5V31h5.5c1.4 0 2.5-.3 3.2-1s1.2-1.8 1.2-3.3c-.1-1.5-.5-2.6-1.2-3.2"></svg:path>`,
})
export class EmojioneLetterPIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
