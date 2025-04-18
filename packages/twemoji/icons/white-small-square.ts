import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiWhiteSmallSquareIcon],svg[twemoji-white-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E6E7E8" d="M25 24a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"></svg:path>`,
})
export class TwemojiWhiteSmallSquareIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
