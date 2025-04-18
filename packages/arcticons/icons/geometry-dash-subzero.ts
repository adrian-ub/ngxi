import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeometryDashSubzeroIcon],svg[arcticons-geometry-dash-subzero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 3.5L44.5 24L24 44.498l-20.5-20.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.222 23.528a3.561 3.561 0 1 0 6.52-1.448zm11.306-11.306a3.561 3.561 0 1 1-1.448 6.52zm9.188 16.976v-4.16h2.676v-2.437l-.77-3.971h-1.796v2.23h-3.775v4.068h-4.123v4.123H20.86v3.775h-2.23v1.796l3.971.77h2.437v-2.676h4.16V29.18z"></svg:path>`,
})
export class ArcticonsGeometryDashSubzeroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
