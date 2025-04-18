import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLatinCrossIcon],svg[twemoji-latin-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9266CC" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M26 10h-6V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6v18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V14h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></svg:path>`,
})
export class TwemojiLatinCrossIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
