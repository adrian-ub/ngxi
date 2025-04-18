import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalStairsDescendDownIcon],svg[memory-table-top-horizontal-stairs-descend-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12H0v-2h2m16 2H4v-2h14m4 2h-2v-2h2m-5 5H5v-2h12m-1 5H6v-2h10m-1 5H7v-2h8Z"></svg:path>`,
})
export class MemoryTableTopHorizontalStairsDescendDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
