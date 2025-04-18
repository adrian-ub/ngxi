import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCollapseDiagonalFillIcon],svg[ri-collapse-diagonal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 11H13V3.5l3.043 3.043l3.25-3.25l1.414 1.414l-3.25 3.25zm-17 2H11v7.5l-3.043-3.043l-3.25 3.25l-1.414-1.414l3.25-3.25z"></svg:path>`,
})
export class RiCollapseDiagonalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
