import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLetterWIcon],svg[twemoji-letter-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M4.298 9.838a4 4 0 0 1-.124-1.054c0-.992.837-2.046 2.201-2.046c1.488 0 2.202.868 2.48 2.232l2.636 13.177h.062l4.031-13.58c.341-1.116 1.272-1.83 2.418-1.83c1.148 0 2.077.713 2.419 1.83l4.03 13.58h.062L27.15 8.97c.277-1.364.992-2.232 2.48-2.232c1.363 0 2.201 1.054 2.201 2.046c0 .434-.031.651-.125 1.054l-3.936 16.93c-.311 1.303-1.334 2.418-3.069 2.418a3.16 3.16 0 0 1-3.069-2.263l-3.597-11.969h-.062l-3.597 11.969a3.16 3.16 0 0 1-3.07 2.263c-1.736 0-2.759-1.115-3.07-2.418z"></svg:path>`,
})
export class TwemojiLetterWIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
