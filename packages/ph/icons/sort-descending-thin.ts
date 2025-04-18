import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSortDescendingThinIcon],svg[ph-sort-descending-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 128a4 4 0 0 1 4-4h72a4 4 0 0 1 0 8H48a4 4 0 0 1-4-4m4-60h56a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8m136 120H48a4 4 0 0 0 0 8h136a4 4 0 0 0 0-8m42.83-102.83l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66L180 57.66V144a4 4 0 0 0 8 0V57.66l33.17 33.17a4 4 0 1 0 5.66-5.66"></svg:path>`,
})
export class PhSortDescendingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
