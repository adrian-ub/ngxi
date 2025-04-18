import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCheckMarkIcon],svg[twemoji-check-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M34.459 1.375a3 3 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a3 3 0 0 0 4.15-.884L35.343 5.524a3 3 0 0 0-.884-4.149"></svg:path>`,
})
export class TwemojiCheckMarkIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
