import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalStairsDescendLeftIcon],svg[memory-table-top-horizontal-stairs-descend-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2M3 15H1V7h2m3 9H4V6h2m3 11H7V5h2m3 13h-2V4h2m0 18h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopHorizontalStairsDescendLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
