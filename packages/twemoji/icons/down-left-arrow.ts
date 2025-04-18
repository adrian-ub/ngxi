import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiDownLeftArrowIcon],svg[twemoji-down-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4z"></svg:path><svg:path fill="#FFF" d="M9 11v16h16z"></svg:path><svg:path fill="#FFF" d="M9.53 20.814L23.343 7L29 12.657L15.186 26.471z"></svg:path>`,
})
export class TwemojiDownLeftArrowIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
