import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageVideoQuestionMarkIcon],svg[mage-video-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 5.32H6.095A3.595 3.595 0 0 0 2.5 8.923v6.162a3.595 3.595 0 0 0 3.595 3.595H12a3.595 3.595 0 0 0 3.595-3.595V8.924A3.594 3.594 0 0 0 12 5.32m9.5 4.118v5.135c0 .25-.071.496-.205.708a1.36 1.36 0 0 1-.555.493a1.27 1.27 0 0 1-.73.124a1.37 1.37 0 0 1-.677-.278l-3.225-2.588a1.38 1.38 0 0 1-.503-1.047c0-.2.045-.396.133-.575c.092-.168.218-.315.37-.432l3.225-2.567a1.36 1.36 0 0 1 .678-.278c.25-.032.504.011.729.124a1.33 1.33 0 0 1 .76 1.181"></svg:path><svg:path stroke-miterlimit="10" d="M7.543 9.948a1.6 1.6 0 0 1 1.742-.906a1.55 1.55 0 0 1 1.137.81a1.345 1.345 0 0 1-.784 1.851a.99.99 0 0 0-.64.898v.37"></svg:path><svg:path stroke-linejoin="round" d="M8.97 15.015h.004"></svg:path></svg:g>`,
})
export class MageVideoQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
