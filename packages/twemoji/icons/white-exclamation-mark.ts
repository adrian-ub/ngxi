import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiWhiteExclamationMarkIcon],svg[twemoji-white-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="32" r="3" fill="#CCD6DD"></svg:circle><svg:path fill="#CCD6DD" d="M21 24a3 3 0 1 1-6 0V5a3 3 0 1 1 6 0z"></svg:path>`,
})
export class TwemojiWhiteExclamationMarkIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
