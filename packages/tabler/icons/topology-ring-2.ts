import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyRing2Icon],svg[tabler-topology-ring-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0M7 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0m14 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0M7 18h10m1-2l-5-8m-2 0l-5 8"></svg:path>`,
})
export class TablerTopologyRing2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
