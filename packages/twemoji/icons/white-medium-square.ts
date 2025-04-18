import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiWhiteMediumSquareIcon],svg[twemoji-white-medium-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E6E7E8" d="M33 30a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3z"></svg:path>`,
})
export class TwemojiWhiteMediumSquareIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
