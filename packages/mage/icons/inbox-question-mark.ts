import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageInboxQuestionMarkIcon],svg[mage-inbox-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:path stroke-miterlimit="10" d="M17.614 3.527a1.33 1.33 0 0 1 1.451-.755a1.3 1.3 0 0 1 .948.675a1.12 1.12 0 0 1-.653 1.543a.83.83 0 0 0-.534.748v.308"></svg:path><svg:path stroke-linejoin="round" d="M18.802 7.75h.003"></svg:path></svg:g>`,
})
export class MageInboxQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
