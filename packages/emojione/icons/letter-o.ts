import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLetterOIcon],svg[emojione-letter-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M41.5 44c-2.2 2.3-5.4 3.4-9.5 3.4s-7.3-1.1-9.5-3.4c-2.9-2.8-4.4-6.8-4.4-12c0-5.3 1.5-9.3 4.4-12c2.2-2.3 5.4-3.4 9.5-3.4s7.3 1.1 9.5 3.4c2.9 2.7 4.4 6.7 4.4 12c0 5.2-1.5 9.2-4.4 12m-3.8-4.4c1.4-1.8 2.1-4.3 2.1-7.6s-.7-5.8-2.1-7.5s-3.3-2.7-5.7-2.7s-4.3.9-5.7 2.7s-2.1 4.3-2.1 7.6s.7 5.8 2.1 7.6s3.3 2.7 5.7 2.7s4.3-1.1 5.7-2.8"></svg:path>`,
})
export class EmojioneLetterOIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
