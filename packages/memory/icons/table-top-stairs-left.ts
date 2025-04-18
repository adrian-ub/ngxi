import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopStairsLeftIcon],svg[memory-table-top-stairs-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15h-2V7h2m-4 9h-2V6h2m-4 11h-2V5h2M8 18H6V4h2M4 19H2V3h2Z"></svg:path>`,
})
export class MemoryTableTopStairsLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
