import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSortDescendingIcon],svg[carbon-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 22l1.414-1.414L23 24.172V4h2v20.172l3.586-3.586L30 22l-6 6zM2 6h14v2H2zm4 6h10v2H6zm4 6h6v2h-6z"></svg:path>`,
})
export class CarbonSortDescendingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
