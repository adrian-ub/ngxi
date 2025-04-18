import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiKeycap0Icon],svg[twemoji-keycap-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M9.785 17.962c0-5.054 1.954-11.41 8.216-11.41c6.264 0 8.217 6.356 8.217 11.41s-1.953 11.41-8.217 11.41c-6.262 0-8.216-6.356-8.216-11.41m11.596 0c0-2.356-.217-7.193-3.379-7.193s-3.379 4.837-3.379 7.193c0 2.201.217 7.193 3.379 7.193s3.379-4.992 3.379-7.193"></svg:path>`,
})
export class TwemojiKeycap0Icon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
