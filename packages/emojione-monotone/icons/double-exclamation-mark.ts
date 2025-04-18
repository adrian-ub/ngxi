import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneDoubleExclamationMarkIcon],svg[emojione-monotone-double-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.989 42.439H13.01L9 2h18z"></svg:path><svg:ellipse cx="17.999" cy="54.354" fill="currentColor" rx="7.663" ry="7.646"></svg:ellipse><svg:path fill="currentColor" d="M50.989 42.439H41.01L37 2h18z"></svg:path><svg:ellipse cx="45.999" cy="54.354" fill="currentColor" rx="7.663" ry="7.646"></svg:ellipse>`,
})
export class EmojioneMonotoneDoubleExclamationMarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
