import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingCottageIcon],svg[tabler-building-cottage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 21h18M4 21V10l2.5-4.5L12 3l5.5 2.5L20 10v11"></svg:path><svg:path d="M10 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5"></svg:path></svg:g>`,
})
export class TablerBuildingCottageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
