import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageShieldQuestionMarkIcon],svg[mage-shield-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M10.278 8.634a1.83 1.83 0 0 1 1.994-1.037a1.77 1.77 0 0 1 1.301.927a1.542 1.542 0 0 1-.897 2.119a1.14 1.14 0 0 0-.733 1.027v.423"></svg:path><svg:path stroke-linejoin="round" d="M11.91 14.433h.005m8.757-2.543V6.61a1.93 1.93 0 0 0-1.32-1.831L14.438 3.14a7.8 7.8 0 0 0-4.876 0L4.648 4.778a1.93 1.93 0 0 0-1.32 1.83v5.28a7.71 7.71 0 0 0 3.603 6.524l4.048 2.544a1.93 1.93 0 0 0 2.042 0l4.047-2.544a7.71 7.71 0 0 0 3.604-6.523"></svg:path></svg:g>`,
})
export class MageShieldQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
