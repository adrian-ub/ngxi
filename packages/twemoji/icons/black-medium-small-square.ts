import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBlackMediumSmallSquareIcon],svg[twemoji-black-medium-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M29 27a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2z"></svg:path>`,
})
export class TwemojiBlackMediumSmallSquareIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
