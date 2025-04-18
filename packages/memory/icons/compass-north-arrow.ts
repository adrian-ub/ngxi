import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCompassNorthArrowIcon],svg[memory-compass-north-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h2v1.5h1V8h1V4h2v10h-2v-2h-1v-2h-1v4H8m2 3v-1h2v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-2v1H9v1H8v1H6v-2h1v-1h1v-1h1v-1"></svg:path>`,
})
export class MemoryCompassNorthArrowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
