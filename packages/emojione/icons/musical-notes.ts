import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMusicalNotesIcon],svg[emojione-musical-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4d5357" d="M17.6 30.5V13.6s8.2 3.9 3.8 12.6c-.1.3 1.1.6 1.3.3c9-15.4-2.9-14.3-5-24.6h-4.4v23.5c-.8-.3-2.3-.4-3.3-.4c-10.7.1-10.7 11 0 11c3.9 0 7.6-2.4 7.6-5.5M53.6 2h-4.4v23.5c-.8-.3-2.3-.4-3.3-.4c-10.6 0-10.6 10.9.1 10.9c3.9 0 7.6-2.4 7.6-5.5V13.6s8.2 3.9 3.8 12.6c-.1.3 1.1.6 1.3.3c9-15.3-2.9-14.2-5.1-24.5M26.3 28v23.5c-.8-.3-2.3-.4-3.3-.4c-10.7 0-10.7 10.9 0 10.9c3.9 0 7.6-2.4 7.6-5.5V39.6s8.2 3.9 3.8 12.6c-.1.3 1.1.6 1.3.3c9-15.4-2.9-14.3-5-24.6h-4.4z"></svg:path>`,
})
export class EmojioneMusicalNotesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
