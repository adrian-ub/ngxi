import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTileCautionHeavyIcon],svg[memory-tile-caution-heavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10H0V6h1V5h2V4h2V3h2V2h2V1h2V0h9v1h-2v1h-2v1h-2v1h-2v1h-2v1H8v1H6v1H4v1H2m0 12H0v-4h1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2V9h2V8h2V7h2V6h1v5h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1H8v1H6v1H4v1H2m20 2h-9v-1h2v-1h2v-1h2v-1h2v-1h1Z"></svg:path>`,
})
export class MemoryTileCautionHeavyIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
