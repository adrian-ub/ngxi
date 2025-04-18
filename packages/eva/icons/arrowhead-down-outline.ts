import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaArrowheadDownOutlineIcon],svg[eva-arrowhead-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41a1 1 0 0 0-1.41-.14"></svg:path><svg:path fill="currentColor" d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41a1 1 0 0 0-1.41-.15L12 9.71L6.64 5.23a1 1 0 0 0-1.28 1.54Z"></svg:path>`,
})
export class EvaArrowheadDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
