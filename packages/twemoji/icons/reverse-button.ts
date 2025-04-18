import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiReverseButtonIcon],svg[twemoji-reverse-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M0 32a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4z"></svg:path><svg:path fill="#FFF" d="M28 7L6 18l22 11z"></svg:path>`,
})
export class TwemojiReverseButtonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
