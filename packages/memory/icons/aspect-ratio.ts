import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAspectRatioIcon],svg[memory-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10h-2V8h-2V6h4M9 16H5v-4h2v2h2m10 5H3v-1H2V4h1V3h16v1h1v14h-1m-1-1V5H4v12Z"></svg:path>`,
})
export class MemoryAspectRatioIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
