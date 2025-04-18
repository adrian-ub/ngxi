import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiEightSpokedAsteriskIcon],svg[twemoji-eight-spoked-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#77B255" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M31.999 16h-9.171l6.899-6.899a2 2 0 1 0-2.828-2.828L20 13.172V4a2 2 0 0 0-4 0v9.171L9.101 6.272A2 2 0 1 0 6.273 9.1l6.9 6.9H4a2 2 0 0 0-.001 4h9.174l-6.9 6.9A2 2 0 0 0 9.1 29.728l6.9-6.9V32a2 2 0 0 0 4 0v-9.172l6.899 6.899a2 2 0 1 0 2.828-2.828L22.828 20h9.171a2 2 0 1 0 0-4"></svg:path>`,
})
export class TwemojiEightSpokedAsteriskIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
