import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalStairsDescendRightIcon],svg[memory-table-top-horizontal-stairs-descend-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2m9 15h-2V7h2m-3 9h-2V6h2m-3 11h-2V5h2m-3 13h-2V4h2m0 18h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopHorizontalStairsDescendRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
