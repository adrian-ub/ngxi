import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageUserQuestionMarkIcon],svg[mage-user-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.959 14.724c-3.6 0-7.62 2.928-7.62 6.526m7.62-9.785a4.36 4.36 0 0 0 4.035-2.683a4.355 4.355 0 0 0-3.17-5.948a4.362 4.362 0 0 0-5.215 4.274a4.356 4.356 0 0 0 4.35 4.357"></svg:path><svg:path stroke-miterlimit="10" d="M15.318 15.92a1.6 1.6 0 0 1 1.742-.907a1.55 1.55 0 0 1 1.137.81a1.347 1.347 0 0 1-.784 1.851a.99.99 0 0 0-.64.898v.37"></svg:path><svg:path stroke-linejoin="round" d="M16.745 20.987h.002"></svg:path></svg:g>`,
})
export class MageUserQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
