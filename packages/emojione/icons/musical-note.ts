import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMusicalNoteIcon],svg[emojione-musical-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4d5357" d="M25.4 2v36.7c-1.2-.4-3.7-.6-5.2-.6c-13.6 0-13.6 16.6 0 16.6c5.9 0 11.7-3.7 11.7-8.3V25.8L47.4 31v15c-1.2-.4-3.7-.6-5.2-.6c-13.6 0-13.6 16.6 0 16.6c5.9 0 11.7-3.7 11.7-8.3V11.4zm22 21.5l-15.5-5.3v-6.3l15.5 5.4z"></svg:path>`,
})
export class EmojioneMusicalNoteIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
