import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneDigitSevenIcon],svg[emojione-digit-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M23 21.8V16h20v4.5c-1.7 1.7-3.3 4.2-5 7.4s-3 6.7-3.9 10.3s-1.3 6.9-1.3 9.7h-5.6c.1-4.5 1-9.1 2.6-13.7c1.6-4.7 3.8-8.8 6.6-12.5z"></svg:path>`,
})
export class EmojioneDigitSevenIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
