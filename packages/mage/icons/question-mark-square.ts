import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageQuestionMarkSquareIcon],svg[mage-question-mark-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.88 8.54a3.29 3.29 0 0 1 3.576-1.86a3.2 3.2 0 0 1 2.334 1.663a2.76 2.76 0 0 1-1.61 3.8a2.05 2.05 0 0 0-1.314 1.842v.76"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.96 17.162h.009"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke-width="1.5" rx="6"></svg:rect></svg:g>`,
})
export class MageQuestionMarkSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
