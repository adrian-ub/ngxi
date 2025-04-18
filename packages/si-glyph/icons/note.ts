import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphNoteIcon],svg[si-glyph-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.938 0H3a2 2 0 0 0-2 2v2h16l-.062-2a2 2 0 0 0-2-2M1 8h4v2H1zm0 3h4v2H1zm4 5v-2H1c.066 1.045.927 2 1.987 2zM1 5h4v2H1zm5 0v2h11l-.062-2zm0 6v2h11l-.062-2zm8.938 5C16 16 16.935 15.045 17 14H6v2zM6 8v2h11l-.062-2z"></svg:path>`,
})
export class SiGlyphNoteIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
