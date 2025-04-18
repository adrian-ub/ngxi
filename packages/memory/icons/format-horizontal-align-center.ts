import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFormatHorizontalAlignCenterIcon],svg[memory-format-horizontal-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15H5v-3H2v-2h3V7h1v1h1v1h1v1h1v2H8v1H7v1H6m11 1h-1v-1h-1v-1h-1v-1h-1v-2h1V9h1V8h1V7h1v3h3v2h-3m-5 6h-2V4h2Z"></svg:path>`,
})
export class MemoryFormatHorizontalAlignCenterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
