import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBadge3dIcon],svg[tabler-badge-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M7 9h1.5a1.5 1.5 0 0 1 0 3H8h.5a1.5 1.5 0 0 1 0 3H7m7-6v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"></svg:path></svg:g>`,
})
export class TablerBadge3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
