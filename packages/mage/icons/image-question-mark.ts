import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageImageQuestionMarkIcon],svg[mage-image-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26"></svg:path><svg:path stroke-linejoin="round" d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32"></svg:path><svg:path stroke-miterlimit="10" d="M16.92 15.89a1.6 1.6 0 0 1 1.743-.906a1.55 1.55 0 0 1 1.137.81a1.347 1.347 0 0 1-.784 1.851a.99.99 0 0 0-.64.898v.37"></svg:path><svg:path stroke-linejoin="round" d="M18.347 20.958h.002"></svg:path></svg:g>`,
})
export class MageImageQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
