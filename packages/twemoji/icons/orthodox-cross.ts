import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiOrthodoxCrossIcon],svg[twemoji-orthodox-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9266CC" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M23 6h-3V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v22a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V10h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1"></svg:path><svg:path fill="#FFF" d="M29 13H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-4.676 11.924l-11.429-3.657a1 1 0 0 0-1.257.648l-.61 1.905a1 1 0 0 0 .648 1.257l11.429 3.657a1 1 0 0 0 1.257-.648l.61-1.905a1 1 0 0 0-.648-1.257"></svg:path>`,
})
export class TwemojiOrthodoxCrossIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
