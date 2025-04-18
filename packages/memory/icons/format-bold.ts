import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFormatBoldIcon],svg[memory-format-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19H6v-2h1V5H6V3h7v1h1v1h1v1h1v4h-1v2h1v1h1v4h-1v1h-1m-3-8V9h1V7h-1V6h-2v4m3 6v-1h1v-1h-1v-1h-3v3Z"></svg:path>`,
})
export class MemoryFormatBoldIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
