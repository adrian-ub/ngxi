import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiNextTrackButtonIcon],svg[twemoji-next-track-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M27 18L15 7v9.166L5 7v22l10-9.167V29zm0-11h4v22h-4z"></svg:path>`,
})
export class TwemojiNextTrackButtonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
