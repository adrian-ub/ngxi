import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyStarIcon],svg[tabler-topology-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0M20 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m12 12a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-6-6a2 2 0 1 0-4 0a2 2 0 0 0 4 0M7.5 7.5l3 3m-3 6l3-3m3 0l3 3m0-9l-3 3"></svg:path>`,
})
export class TablerTopologyStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
