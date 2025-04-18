import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiDoubleExclamationMarkIcon],svg[twemoji-double-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11" cy="31" r="3" fill="#BE1931"></svg:circle><svg:path fill="#BE1931" d="M14 23a3 3 0 1 1-6 0V4a3 3 0 1 1 6 0z"></svg:path><svg:circle cx="25" cy="31" r="3" fill="#BE1931"></svg:circle><svg:path fill="#BE1931" d="M28 23a3 3 0 0 1-6 0V4a3 3 0 0 1 6 0z"></svg:path>`,
})
export class TwemojiDoubleExclamationMarkIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
