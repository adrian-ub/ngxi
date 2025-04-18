import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmojisCrossMarkIcon],svg[streamline-emojis-cross-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#45413c" d="M9.76 45.14a14.24 1.86 0 1 0 28.48 0a14.24 1.86 0 1 0-28.48 0" opacity=".15"></svg:path><svg:path fill="#ff6242" d="m40.06 12.76l-4.82-4.82a1.24 1.24 0 0 0-1.75 0L24 17.43l-9.49-9.49a1.24 1.24 0 0 0-1.75 0l-4.82 4.82a1.24 1.24 0 0 0 0 1.75L17.43 24l-9.49 9.49a1.24 1.24 0 0 0 0 1.75l4.82 4.82a1.24 1.24 0 0 0 1.75 0L24 30.57l9.49 9.49a1.24 1.24 0 0 0 1.75 0l4.82-4.82a1.24 1.24 0 0 0 0-1.75L30.57 24l9.49-9.49a1.24 1.24 0 0 0 0-1.75"></svg:path><svg:path fill="#ff866e" d="m9 15.6l3.73-3.73a1.23 1.23 0 0 1 1.75 0L24 21.35l9.49-9.48a1.23 1.23 0 0 1 1.75 0L39 15.6l1.09-1.09a1.24 1.24 0 0 0 0-1.75l-4.85-4.82a1.24 1.24 0 0 0-1.75 0L24 17.43l-9.49-9.49a1.24 1.24 0 0 0-1.75 0l-4.82 4.82a1.24 1.24 0 0 0 0 1.75Z"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="m40.06 12.76l-4.82-4.82a1.24 1.24 0 0 0-1.75 0L24 17.43l-9.49-9.49a1.24 1.24 0 0 0-1.75 0l-4.82 4.82a1.24 1.24 0 0 0 0 1.75L17.43 24l-9.49 9.49a1.24 1.24 0 0 0 0 1.75l4.82 4.82a1.24 1.24 0 0 0 1.75 0L24 30.57l9.49 9.49a1.24 1.24 0 0 0 1.75 0l4.82-4.82a1.24 1.24 0 0 0 0-1.75L30.57 24l9.49-9.49a1.24 1.24 0 0 0 0-1.75"></svg:path>`,
})
export class StreamlineEmojisCrossMarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
