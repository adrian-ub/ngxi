import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCompassEastArrowIcon],svg[memory-compass-east-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10v2H5v1H4v1H3v1H2v1H0v-2h1v-1h1v-1h1v-2H2V9H1V8H0V6h2v1h1v1h1v1h1v1m5-4h6v2h-4v2h4v2h-4v2h4v2h-6"></svg:path>`,
})
export class MemoryCompassEastArrowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
