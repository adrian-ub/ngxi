import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryWaterFillIcon],svg[memory-water-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21H8v-1H6v-1H5v-1H4v-2H3v-3h1v-2h1V9h1V7h1V6h1V4h1V3h1V1h2v2h1v1h1v2h1v1h1v2h1v2h1v2h1v3h-1v2h-1v1h-1v1h-2Z"></svg:path>`,
})
export class MemoryWaterFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
