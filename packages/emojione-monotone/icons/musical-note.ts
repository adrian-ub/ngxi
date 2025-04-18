import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneMusicalNoteIcon],svg[emojione-monotone-musical-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.386 2v36.721c-1.249-.406-3.727-.629-5.163-.629c-13.631 0-13.631 16.59 0 16.59c5.856 0 11.715-3.715 11.715-8.295V25.781L47.448 31v15.037c-1.249-.404-3.727-.629-5.163-.629c-13.631 0-13.631 16.592 0 16.592C48.142 62 54 58.287 54 53.705V11.442zm22.062 21.518l-15.511-5.309v-6.291l15.511 5.367z"></svg:path>`,
})
export class EmojioneMonotoneMusicalNoteIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
