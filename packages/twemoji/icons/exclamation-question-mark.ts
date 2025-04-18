import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiExclamationQuestionMarkIcon],svg[twemoji-exclamation-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BE1931" d="M21 27a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3c.603-.006 6-1 6-5c0-2-2-4-5-4c-2.441 0-4 2-4 3a3 3 0 1 1-6 0c0-4.878 4.58-9 10-9c8 0 11 5.982 11 11c0 4.145-2.277 7.313-6.413 8.92c-.9.351-1.79.587-2.587.747V24a3 3 0 0 1-3 3"></svg:path><svg:circle cx="21" cy="32" r="3" fill="#BE1931"></svg:circle><svg:circle cx="6" cy="32" r="3" fill="#BE1931"></svg:circle><svg:path fill="#BE1931" d="M9 24a3 3 0 1 1-6 0V5a3 3 0 1 1 6 0z"></svg:path>`,
})
export class TwemojiExclamationQuestionMarkIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
