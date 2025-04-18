import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopVerticalStairsAscendDownIcon],svg[memory-table-top-vertical-stairs-ascend-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12H0v-2h2m15 2H5v-2h12m5 2h-2v-2h2m-4 5H4v-2h14m1 5H3v-2h16m1 5H2v-2h18Z"></svg:path>`,
})
export class MemoryTableTopVerticalStairsAscendDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
