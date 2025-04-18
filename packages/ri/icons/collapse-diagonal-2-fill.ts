import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCollapseDiagonal2FillIcon],svg[ri-collapse-diagonal-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 11H11V3.5L7.957 6.543l-3.25-3.25l-1.414 1.414l3.25 3.25zm17 2H13v7.5l3.043-3.043l3.25 3.25l1.414-1.414l-3.25-3.25z"></svg:path>`,
})
export class RiCollapseDiagonal2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
