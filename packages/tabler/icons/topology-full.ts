import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyFullIcon],svg[tabler-topology-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m12 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0M6 8v8m12 0V8M8 6h8m0 12H8M7.5 7.5l9 9m-9 0l9-9"></svg:path>`,
})
export class TablerTopologyFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
