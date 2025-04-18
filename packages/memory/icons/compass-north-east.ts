import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCompassNorthEastIcon],svg[memory-compass-north-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h2v1.5h1V10h1V6h2v10H8v-2H7v-2H6v4H4m8-10h6v2h-4v2h4v2h-4v2h4v2h-6"></svg:path>`,
})
export class MemoryCompassNorthEastIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
