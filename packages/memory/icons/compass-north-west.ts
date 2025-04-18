import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCompassNorthWestIcon],svg[memory-compass-north-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h2v1.5h1V10h1V6h2v10H6v-2H5v-2H4v4H2m8-10h2v6h1v1h1V8h2v5h1v-1h1V6h2v7h-1v2h-1v1h-2v-1h-2v1h-2v-1h-1v-2h-1"></svg:path>`,
})
export class MemoryCompassNorthWestIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
