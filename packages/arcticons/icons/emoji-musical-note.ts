import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiMusicalNoteIcon],svg[arcticons-emoji-musical-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.099 9.389l-21.182 4.715l-.058-3.893l21.24-4.71zm-21.239.822l.364 27.477M39.099 9.389l.312 23.662M8.59 37.688c0 2.657 2.156 4.811 4.817 4.811s4.817-2.154 4.817-4.81s-2.157-4.812-4.817-4.812s-4.817 2.154-4.817 4.811m21.186-4.637a4.814 4.814 0 0 0 4.815 4.813a4.814 4.814 0 0 0 4.82-4.809v-.004a4.814 4.814 0 0 0-4.814-4.814a4.814 4.814 0 0 0-4.821 4.807z"></svg:path>`,
})
export class ArcticonsEmojiMusicalNoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
