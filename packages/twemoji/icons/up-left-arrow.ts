import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiUpLeftArrowIcon],svg[twemoji-up-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M9 25V9h16z"></svg:path><svg:path fill="#FFF" d="m10.028 15.686l5.657-5.657L29 23.343L23.342 29z"></svg:path>`,
})
export class TwemojiUpLeftArrowIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
