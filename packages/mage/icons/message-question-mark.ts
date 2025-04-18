import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMessageQuestionMarkIcon],svg[mage-message-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" stroke-width="1.5" d="M21.25 7.506v6.607a3.963 3.963 0 0 1-3.964 3.965h-2.643l-2.18 2.18a.636.636 0 0 1-.925 0l-2.18-2.18H6.713a3.964 3.964 0 0 1-3.964-3.965V7.506a3.964 3.964 0 0 1 3.964-3.964h10.572a3.964 3.964 0 0 1 3.964 3.964"></svg:path><svg:path stroke-miterlimit="10" stroke-width="1.5" d="M9.539 8.185a2.615 2.615 0 0 1 2.85-1.482a2.54 2.54 0 0 1 1.86 1.325a2.2 2.2 0 0 1-1.283 3.029a1.625 1.625 0 0 0-1.047 1.468v.606"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M11.898 15.766h.006m-.006 0h.006"></svg:path></svg:g>`,
})
export class MageMessageQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
