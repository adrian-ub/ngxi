import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryHexagonIcon],svg[memory-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21h-2v-1H8v-1H6v-1H4v-1H2V5h2V4h2V3h2V2h2V1h2v1h2v1h2v1h2v1h2v12h-2v1h-2v1h-2v1h-2m0-1v-1h2v-1h2v-1h2V6h-2V5h-2V4h-2V3h-2v1H8v1H6v1H4v10h2v1h2v1h2v1Z"></svg:path>`,
})
export class MemoryHexagonIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
