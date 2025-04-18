import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLeftRightArrowIcon],svg[twemoji-left-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M13 9L3 18l10 9zm20 9L23 9v18z"></svg:path><svg:path fill="#FFF" d="M12 14h12v8H12z"></svg:path>`,
})
export class TwemojiLeftRightArrowIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
