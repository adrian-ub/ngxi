import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCube3dSphereIcon],svg[tabler-cube-3d-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 17.6l-2-1.1V14m0-4V7.5l2-1.1m4-2.3L12 3l2 1.1m4 2.3l2 1.1V10m0 4v2.5l-2 1.12m-4 2.28L12 21l-2-1.1m2-7.9l2-1.1m4-2.3l2-1.1M12 12v2.5m0 4V21m0-9l-2-1.12M6 8.6L4 7.5"></svg:path>`,
})
export class TablerCube3dSphereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
