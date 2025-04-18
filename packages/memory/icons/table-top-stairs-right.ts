import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopStairsRightIcon],svg[memory-table-top-stairs-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15H2V7h2m4 9H6V6h2m4 11h-2V5h2m4 13h-2V4h2m4 15h-2V3h2Z"></svg:path>`,
})
export class MemoryTableTopStairsRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
