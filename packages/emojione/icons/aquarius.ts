import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneAquariusIcon],svg[emojione-aquarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#785aa0"></svg:circle><svg:path fill="#fff" stroke="#fff" stroke-miterlimit="10" d="M48.8 18.2c-3.2 2.4-6.3 4.8-9.5 7.2v-5.9c0-1.1-1.3-2-2.2-1.3c-3.2 2.4-6.3 4.8-9.5 7.2v-5.9c0-1.1-1.3-2-2.2-1.3c-3.9 2.9-7.8 5.9-11.7 8.8c-1.5 1.1-.1 3.8 1.5 2.6c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 1.1 1.3 2 2.2 1.3c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 1.1 1.3 2 2.2 1.3c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 2 2.9 2 2.9 0v-8.8c0-1-1.3-2-2.2-1.3zm0 16c-3.2 2.4-6.3 4.8-9.5 7.2v-5.9c0-1.1-1.3-2-2.2-1.3c-3.2 2.4-6.3 4.8-9.5 7.2v-5.9c0-1.1-1.3-2-2.2-1.3c-3.9 2.9-7.8 5.9-11.7 8.8c-1.5 1.1-.1 3.8 1.5 2.6c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 1.1 1.3 2 2.2 1.3c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 1.1 1.3 2 2.2 1.3c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 2 2.9 2 2.9 0v-8.8c0-1-1.3-2-2.2-1.3z"></svg:path>`,
})
export class EmojioneAquariusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
