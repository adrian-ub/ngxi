import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPlayOrPauseButtonIcon],svg[twemoji-play-or-pause-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="m6 7l13 11L6 29zm20 0h4v22h-4zm-7 0h4v22h-4z"></svg:path>`,
})
export class TwemojiPlayOrPauseButtonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
