import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBridgeSurfaceIcon],svg[iconoir-bridge-surface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12c0 4 2 9 8 9M10 6c0 4 2 9 8 9M3 8.5v-2M10 3V1M3 12l7-6m1 15l7-6m-3.5 6h2m4.5-6h2"></svg:path>`,
})
export class IconoirBridgeSurfaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
