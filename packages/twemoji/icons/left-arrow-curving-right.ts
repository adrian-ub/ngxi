import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLeftArrowCurvingRightIcon],svg[twemoji-left-arrow-curving-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M0 32a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4z"></svg:path><svg:path fill="#FFF" d="M29.2 25L22 19v4h-4a7 7 0 0 1 0-14h8V5h-8C11.926 5 7 9.925 7 16c0 6.074 4.926 11 11 11h4v4z"></svg:path>`,
})
export class TwemojiLeftArrowCurvingRightIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
