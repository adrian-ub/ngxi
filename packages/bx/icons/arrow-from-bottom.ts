import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxArrowFromBottomIcon],svg[bx-arrow-from-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h12v2H6zm6-14.414l-6.707 6.707l1.414 1.414L11 7.414V16h2V7.414l4.293 4.293l1.414-1.414z"></svg:path>`,
})
export class BxArrowFromBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
