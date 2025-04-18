import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopStairsDownIcon],svg[memory-table-top-stairs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H7V2h8m1 6H6V6h10m1 6H5v-2h12m1 6H4v-2h14m1 6H3v-2h16Z"></svg:path>`,
})
export class MemoryTableTopStairsDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
