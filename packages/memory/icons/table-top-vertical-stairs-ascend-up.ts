import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopVerticalStairsAscendUpIcon],svg[memory-table-top-vertical-stairs-ascend-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H2V1h18m-1 5H3V4h16m-1 5H4V7h14M2 12H0v-2h2m15 2H5v-2h12m5 2h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopVerticalStairsAscendUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
