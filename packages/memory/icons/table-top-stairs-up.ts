import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopStairsUpIcon],svg[memory-table-top-stairs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H3V2h16m-1 6H4V6h14m-1 6H5v-2h12m-1 6H6v-2h10m-1 6H7v-2h8Z"></svg:path>`,
})
export class MemoryTableTopStairsUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
