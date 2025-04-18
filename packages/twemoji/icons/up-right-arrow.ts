import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiUpRightArrowIcon],svg[twemoji-up-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M0 32a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4z"></svg:path><svg:path fill="#FFF" d="M27 25V9H11z"></svg:path><svg:path fill="#FFF" d="M7 23.343L19.816 10.53l5.656 5.657L12.657 29z"></svg:path>`,
})
export class TwemojiUpRightArrowIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
