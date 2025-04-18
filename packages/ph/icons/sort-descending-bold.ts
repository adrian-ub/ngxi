import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSortDescendingBoldIcon],svg[ph-sort-descending-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 128a12 12 0 0 1 12-12h68a12 12 0 0 1 0 24H48a12 12 0 0 1-12-12m12-52h52a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24m132 104H48a12 12 0 0 0 0 24h132a12 12 0 0 0 0-24m52.49-100.49l-40-40a12 12 0 0 0-17 0l-40 40a12 12 0 0 0 17 17L172 77v67a12 12 0 0 0 24 0V77l19.51 19.52a12 12 0 0 0 17-17Z"></svg:path>`,
})
export class PhSortDescendingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
