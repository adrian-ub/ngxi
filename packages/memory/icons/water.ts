import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryWaterIcon],svg[memory-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21H8v-1H6v-1H5v-1H4v-2H3v-3h1v-2h1V9h1V7h1V6h1V4h1V3h1V1h2v2h1v1h1v2h1v1h1v2h1v2h1v2h1v3h-1v2h-1v1h-1v1h-2Zm-1-2v-1h2v-1h1v-2h1v-1h-1v-2h-1v-2h-1V8h-1V7h-1V5h-2v2H9v1H8v2H7v2H6v2H5v1h1v2h1v1h2v1Z"></svg:path>`,
})
export class MemoryWaterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
