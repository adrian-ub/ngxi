import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGeometryIcon],svg[tabler-geometry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 21l4-12m2 0l1.48 4.439m.949 2.847L17 21M10 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-6 5c1.526 2.955 4.588 5 8 5c3.41 0 6.473-2.048 8-5m-8-7V3"></svg:path>`,
})
export class TablerGeometryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
