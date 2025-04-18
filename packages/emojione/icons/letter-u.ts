import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLetterUIcon],svg[emojione-letter-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M20.4 17.1h6.2v17.8c0 2 .2 3.4.7 4.4q1.05 2.4 4.8 2.4q3.6 0 4.8-2.4c.5-.9.7-2.4.7-4.4V17.1h6.2V35c0 3.1-.5 5.5-1.4 7.2c-1.8 3.1-5.2 4.7-10.2 4.7s-8.4-1.6-10.2-4.7c-1-1.7-1.4-4.1-1.4-7.2z"></svg:path>`,
})
export class EmojioneLetterUIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
