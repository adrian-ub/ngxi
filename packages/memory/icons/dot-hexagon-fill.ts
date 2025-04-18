import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryDotHexagonFillIcon],svg[memory-dot-hexagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21h-2v-1H8v-1H6v-1H4v-1H2V5h2V4h2V3h2V2h2V1h2v1h2v1h2v1h2v1h2v12h-2v1h-2v1h-2v1h-2m0-7v-1h1v-2h-1V9h-2v1H9v2h1v1Z"></svg:path>`,
})
export class MemoryDotHexagonFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
