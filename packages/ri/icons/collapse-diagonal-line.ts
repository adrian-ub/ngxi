import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCollapseDiagonalLineIcon],svg[ri-collapse-diagonal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4h-2v7h7V9h-3.586l4.293-4.293l-1.414-1.414L15 7.586zM4 15h3.586l-4.293 4.293l1.414 1.414L9 16.414V20h2v-7H4z"></svg:path>`,
})
export class RiCollapseDiagonalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
