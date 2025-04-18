import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVectorTriangleOffIcon],svg[tabler-vector-triangle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1M3 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm17.705 2.709A1 1 0 0 1 20 21h-2a1 1 0 0 1-1-1v-2c0-.28.115-.532.3-.714M6.5 17.1l3.749-6.823m2.909-1.08L12.5 8M7 19h10M3 3l18 18"></svg:path>`,
})
export class TablerVectorTriangleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
