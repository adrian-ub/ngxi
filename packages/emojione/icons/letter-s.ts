import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLetterSIcon],svg[emojione-letter-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M25.8 37.6c.2 1.3.6 2.3 1.1 3c1 1.2 2.7 1.8 5.2 1.8c1.5 0 2.6-.2 3.6-.5c1.7-.6 2.6-1.7 2.6-3.4c0-1-.4-1.7-1.3-2.2c-.8-.5-2.2-1-4-1.4l-3.1-.7c-3.1-.7-5.2-1.4-6.4-2.2c-2-1.3-2.9-3.4-2.9-6.3c0-2.6 1-4.8 2.9-6.5s4.7-2.6 8.4-2.6c3.1 0 5.7.8 7.9 2.4s3.3 4 3.4 7.1h-5.8c-.1-1.7-.9-3-2.3-3.7c-1-.5-2.2-.7-3.6-.7c-1.6 0-2.9.3-3.8.9s-1.4 1.5-1.4 2.6c0 1 .5 1.8 1.4 2.3q.9.45 3.9 1.2l5.1 1.2c2.2.5 3.9 1.2 5 2.1c1.7 1.4 2.6 3.3 2.6 5.9c0 2.7-1 4.9-3.1 6.6c-2 1.8-4.9 2.6-8.7 2.6s-6.8-.9-9-2.6C21.1 43 20 40.6 20 37.6z"></svg:path>`,
})
export class EmojioneLetterSIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
