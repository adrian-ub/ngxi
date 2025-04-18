import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneExclamationMarkIcon],svg[emojione-monotone-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36.989 42.439H27.01L23 2h18z"></svg:path><svg:ellipse cx="31.999" cy="54.354" fill="currentColor" rx="7.663" ry="7.646"></svg:ellipse>`,
})
export class EmojioneMonotoneExclamationMarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
