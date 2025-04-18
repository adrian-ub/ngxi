import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsQuestionMarkIcon],svg[mage-message-dots-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 11.338a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m4.625 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m-9.25 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321"></svg:path><svg:path stroke-linejoin="round" d="M21.25 10.94v3.17a4 4 0 0 1-1.16 2.81a4.2 4.2 0 0 1-1.29.86a4.1 4.1 0 0 1-1.51.3h-2.65l-2.18 2.18a.8.8 0 0 1-.21.15a.65.65 0 0 1-.5 0a.8.8 0 0 1-.21-.15l-2.18-2.18H6.71a4 4 0 0 1-2.8-1.16a4 4 0 0 1-1.16-2.81v-6.6a4 4 0 0 1 4-4H13"></svg:path><svg:path stroke-miterlimit="10" d="M17.614 3.45a1.2 1.2 0 0 1 1.306-.68a1.16 1.16 0 0 1 .853.607a1.01 1.01 0 0 1-.588 1.389a.745.745 0 0 0-.48.673v.277"></svg:path><svg:path stroke-linejoin="round" d="M18.74 7.896h.002"></svg:path></svg:g>`,
})
export class MageMessageDotsQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
