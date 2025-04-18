import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimAngleDoubleDownIcon],svg[uim-angle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.75a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 9.336l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293m0 5.5a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 14.836l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293"></svg:path>`,
})
export class UimAngleDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
