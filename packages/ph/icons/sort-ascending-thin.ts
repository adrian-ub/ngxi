import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSortAscendingThinIcon],svg[ph-sort-ascending-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 128a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4M48 68h136a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8m56 120H48a4 4 0 0 0 0 8h56a4 4 0 0 0 0-8m122.83-22.83a4 4 0 0 0-5.66 0L188 198.34V112a4 4 0 0 0-8 0v86.34l-33.17-33.17a4 4 0 0 0-5.66 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhSortAscendingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
