import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMessageQuestionMarkRoundIcon],svg[mage-message-question-mark-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" stroke-width="1.5" d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"></svg:path><svg:path stroke-miterlimit="10" stroke-width="1.5" d="M9.287 8.667a2.88 2.88 0 0 1 3.142-1.631a2.8 2.8 0 0 1 2.05 1.459a2.422 2.422 0 0 1-1.414 3.334a1.79 1.79 0 0 0-1.154 1.615v.667"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M11.888 17.012h.006m-.006 0h.006"></svg:path></svg:g>`,
})
export class MageMessageQuestionMarkRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
