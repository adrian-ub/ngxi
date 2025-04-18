import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCalendarQuestionMarkIcon],svg[mage-calendar-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 5h18m-4-7v4m-10-4v4"></svg:path><svg:path stroke-miterlimit="10" d="M10.496 12.932a1.6 1.6 0 0 1 1.742-.906a1.55 1.55 0 0 1 1.137.81a1.345 1.345 0 0 1-.784 1.852a.99.99 0 0 0-.64.897v.37"></svg:path><svg:path stroke-linejoin="round" d="M11.922 18h.004"></svg:path></svg:g>`,
})
export class MageCalendarQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
