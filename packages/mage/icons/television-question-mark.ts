import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionQuestionMarkIcon],svg[mage-television-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18.25 3.33H5.75a3 3 0 0 0-3 3v7.87a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V6.33a3 3 0 0 0-3-3M12 17.2v3.47m-3.47 0h6.94"></svg:path><svg:path stroke-miterlimit="10" d="M10.274 7.893a1.834 1.834 0 0 1 1.999-1.04a1.78 1.78 0 0 1 1.304.93a1.545 1.545 0 0 1-.9 2.124a1.14 1.14 0 0 0-.734 1.03v.424"></svg:path><svg:path stroke-linejoin="round" d="M11.91 13.707h.005"></svg:path></svg:g>`,
})
export class MageTelevisionQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
