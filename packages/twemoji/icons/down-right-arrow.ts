import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiDownRightArrowIcon],svg[twemoji-down-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M0 4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#FFF" d="M27 11v16H11z"></svg:path><svg:path fill="#FFF" d="M7 12.657L12.658 7l13.814 13.814l-5.656 5.657z"></svg:path>`,
})
export class TwemojiDownRightArrowIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
