import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNexusIcon],svg[arcticons-nexus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.526 25.5H25.5v3.024L39.475 42.5l3.025-3.025zM22.5 28.526V25.5h-3.024L5.5 39.475L8.525 42.5zM19.474 22.5H22.5v-3.024L8.525 5.5L5.5 8.525zm6.026-3.026V22.5h3.024L42.5 8.525L39.475 5.5z"></svg:path>`,
})
export class ArcticonsNexusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
