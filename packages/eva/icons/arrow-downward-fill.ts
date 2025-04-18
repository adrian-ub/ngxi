import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaArrowDownwardFillIcon],svg[eva-arrow-downward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5l.15.09l.13.07a1 1 0 0 0 .72 0l.13-.07l.15-.09l6-5a1 1 0 0 0 .13-1.41"></svg:path>`,
})
export class EvaArrowDownwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
