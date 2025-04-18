import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaArrowForwardOutlineIcon],svg[eva-arrow-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1 1 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1 1 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23a1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2"></svg:path>`,
})
export class EvaArrowForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
