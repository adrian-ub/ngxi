import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPolygonIcon],svg[tabler-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 3a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6.5 9.5l3.5-3m4-1L17 7m1.5 3L16 17m-2.5.5l-7-5"></svg:path>`,
})
export class TablerPolygonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
