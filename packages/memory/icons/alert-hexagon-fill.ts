import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAlertHexagonFillIcon],svg[memory-alert-hexagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21h-2v-1H8v-1H6v-1H4v-1H2V5h2V4h2V3h2V2h2V1h2v1h2v1h2v1h2v1h2v12h-2v1h-2v1h-2v1h-2m0-8V6h-2v6m2 4v-2h-2v2Z"></svg:path>`,
})
export class MemoryAlertHexagonFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
