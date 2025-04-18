import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryRangeIcon],svg[memory-range-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8H5V7H4V6H3V4h6v2H8v1H7m-4 5H1v-2h2m9 2H9v-2h3m9 2h-3v-2h3M7 13H5v-1H4v-2h1V9h2v1h1v2H7m9 1h-2v-1h-1v-2h1V9h2v1h1v2h-1m2 6h-6v-2h1v-1h1v-1h2v1h1v1h1Z"></svg:path>`,
})
export class MemoryRangeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
