import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiUnlockedIcon],svg[twemoji-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#AAB8C2" d="M18 0c-4.612 0-8.483 3.126-9.639 7.371l3.855 1.052A6 6 0 0 1 18 4a6 6 0 0 1 6 6v10h4V10c0-5.522-4.477-10-10-10"></svg:path><svg:path fill="#FFAC33" d="M31 32a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4z"></svg:path>`,
})
export class TwemojiUnlockedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
