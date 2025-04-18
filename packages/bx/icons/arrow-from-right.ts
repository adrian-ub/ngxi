import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxArrowFromRightIcon],svg[bx-arrow-from-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6h2v12h-2zm-2 5H7.414l4.293-4.293l-1.414-1.414L3.586 12l6.707 6.707l1.414-1.414L7.414 13H16z"></svg:path>`,
})
export class BxArrowFromRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
