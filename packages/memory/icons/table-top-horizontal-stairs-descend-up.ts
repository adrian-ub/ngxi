import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalStairsDescendUpIcon],svg[memory-table-top-horizontal-stairs-descend-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H7V1h8m1 5H6V4h10m1 5H5V7h12M2 12H0v-2h2m16 2H4v-2h14m4 2h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopHorizontalStairsDescendUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
