import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCornerDownLeftIcon],svg[uim-corner-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.942 22a1 1 0 0 1-.707-.293l-4.628-4.628a1 1 0 0 1 0-1.414l4.628-4.63a1 1 0 0 1 1.414 1.415l-3.92 3.922l3.92 3.921A1 1 0 0 1 9.942 22"></svg:path><svg:path fill="currentColor" d="M15.686 17.372H5.314a1 1 0 0 1 0-2h10.372a2 2 0 0 0 2-2V3a1 1 0 0 1 2 0v10.372a4.004 4.004 0 0 1-4 4"></svg:path>`,
})
export class UimCornerDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
