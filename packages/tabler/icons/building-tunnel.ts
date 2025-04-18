import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingTunnelIcon],svg[tabler-building-tunnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 21h14a2 2 0 0 0 2-2v-7a9 9 0 0 0-18 0v7a2 2 0 0 0 2 2"></svg:path><svg:path d="M8 21v-9a4 4 0 1 1 8 0v9M3 17h4m10 0h4m0-5h-4M7 12H3m9-9v5M6 6l3 3m6 0l3-3z"></svg:path></svg:g>`,
})
export class TablerBuildingTunnelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
