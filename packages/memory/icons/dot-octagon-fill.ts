import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryDotOctagonFillIcon],svg[memory-dot-octagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1V7h1V6h1V5h1V4h1V3h1V2h1V1h8v1h1v1h1v1h1v1h1v1h1v1h1v8h-1v1h-1v1h-1v1h-1v1h-1v1h-1m-3-7v-1h1v-2h-1V9h-2v1H9v2h1v1Z"></svg:path>`,
})
export class MemoryDotOctagonFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
