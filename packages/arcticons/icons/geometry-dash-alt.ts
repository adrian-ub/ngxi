import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeometryDashAltIcon],svg[arcticons-geometry-dash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 24L24 3.5L44.498 24l-20.5 20.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.635 24.823l3.879-3.878l3.878 3.878l-3.878 3.878zm8.965-8.965l3.879-3.879l3.878 3.879l-3.878 3.878zm-1.252 17.687L33.2 19.693l3.324 3.324L22.673 36.87z"></svg:path>`,
})
export class ArcticonsGeometryDashAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
