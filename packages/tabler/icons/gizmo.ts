import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGizmoIcon],svg[tabler-gizmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20 19l-8-5.5L4 19m8-15v9.5M11 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M3 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0m16 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class TablerGizmoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
