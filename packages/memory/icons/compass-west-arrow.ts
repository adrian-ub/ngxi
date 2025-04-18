import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCompassWestArrowIcon],svg[memory-compass-west-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h2v6h1v1h1V8h2v5h1v-1h1V6h2v7h-1v2h-1v1h-2v-1H8v1H6v-1H5v-2H4m12-3v2h1v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-2h1V9h1V8h1V6h-2v1h-1v1h-1v1h-1v1"></svg:path>`,
})
export class MemoryCompassWestArrowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
