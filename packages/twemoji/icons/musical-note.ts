import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMusicalNoteIcon],svg[twemoji-musical-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5DADEC" d="M34.209.206L11.791 2.793C10.806 2.907 10 3.811 10 4.803v18.782A7.9 7.9 0 0 0 7 23c-3.865 0-7 2.685-7 6s3.135 6 7 6s7-2.686 7-6V10.539l18-2.077v13.124A7.9 7.9 0 0 0 29 21c-3.865 0-7 2.685-7 6s3.135 6 7 6s7-2.686 7-6V1.803c0-.992-.806-1.71-1.791-1.597"></svg:path>`,
})
export class TwemojiMusicalNoteIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
