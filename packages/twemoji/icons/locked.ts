import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLockedIcon],svg[twemoji-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#AAB8C2" d="M18 3C12.477 3 8 7.477 8 13v10h4V13a6 6 0 0 1 12 0v10h4V13c0-5.523-4.477-10-10-10"></svg:path><svg:path fill="#FFAC33" d="M31 32a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4z"></svg:path>`,
})
export class TwemojiLockedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
