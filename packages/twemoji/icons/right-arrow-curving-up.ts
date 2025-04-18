import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRightArrowCurvingUpIcon],svg[twemoji-right-arrow-curving-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="m20.589 5.8l6 7.2H23v7.2c0 5.523-4.683 10-10.206 10c-1.414 0-2.861-.298-4.081-.827l2.699-3.3c.396.083.987.127 1.408.127c3.314 0 6.18-2.686 6.18-6V13h-4.411z"></svg:path>`,
})
export class TwemojiRightArrowCurvingUpIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
