import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalStairsAscendLeftIcon],svg[memory-table-top-horizontal-stairs-ascend-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2m0 17h-2V5h2M9 18H7V4h2M6 19H4V3h2M3 20H1V2h2m9 20h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopHorizontalStairsAscendLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
