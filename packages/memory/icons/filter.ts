import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFilterIcon],svg[memory-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h1v-7h1V9h1V8h1V7h1V5H6v2h1v1h1v1h1v1h1v6h1m3 4h-3v-1h-1v-1H9v-1H8v-6H7v-1H6V9H5V8H4V4h1V3h12v1h1v4h-1v1h-1v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryFilterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
