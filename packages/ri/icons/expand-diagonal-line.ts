import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandDiagonalLineIcon],svg[ri-expand-diagonal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.586 5H14V3h7v7h-2V6.414l-4.293 4.293l-1.414-1.414zM3 14h2v3.586l4.293-4.293l1.414 1.414L6.414 19H10v2H3z"></svg:path>`,
})
export class RiExpandDiagonalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
