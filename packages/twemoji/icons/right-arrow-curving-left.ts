import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRightArrowCurvingLeftIcon],svg[twemoji-right-arrow-curving-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M18 5h-8v4h8.01A7 7 0 0 1 18 23h-4v-4l-7.2 6l7.2 6v-4h4c6.074 0 11-4.926 11-11c0-6.075-4.926-11-11-11"></svg:path>`,
})
export class TwemojiRightArrowCurvingLeftIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
