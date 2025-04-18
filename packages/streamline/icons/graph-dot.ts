import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphDotIcon],svg[streamline-graph-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.643.643v12.714h12.714"></svg:path><svg:path d="M4.581 3.854a1.776 1.776 0 1 1 0 3.552a1.776 1.776 0 0 1 0-3.552m7-2.968a1.776 1.776 0 1 1 0 3.551a1.776 1.776 0 0 1 0-3.551m-2.469 6.52a1.776 1.776 0 1 1 0 3.552a1.776 1.776 0 0 1 0-3.552M.643 9.424l2.534-2.706m2.953-.202L7.755 8.03m2.141-.452l1.171-3.219"></svg:path></svg:g>`,
})
export class StreamlineGraphDotIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
