import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyStarRing2Icon],svg[tabler-topology-star-ring-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 20a2 2 0 1 0-4 0a2 2 0 0 0 4 0m0-16a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0h4m4 0h4m-6-6v4m0 4v4m-6.5-7.5l5-5m3 0l5 5m0 3l-5 5m-3 0l-5-5"></svg:path>`,
})
export class TablerTopologyStarRing2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
