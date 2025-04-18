import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLetterDIcon],svg[emojione-letter-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M37.7 18.1c2 .7 3.7 1.9 4.9 3.7c1 1.4 1.7 3 2.1 4.7s.6 3.3.6 4.8c0 3.9-.8 7.1-2.3 9.8c-2.1 3.6-5.3 5.4-9.7 5.4H20.7v-29h12.5q2.7 0 4.5.6m-11.1 4.4v18.9h5.6q4.35 0 6-4.2c.6-1.5.9-3.4.9-5.5c0-3-.5-5.2-1.4-6.8s-2.8-2.4-5.5-2.4z"></svg:path>`,
})
export class EmojioneLetterDIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
