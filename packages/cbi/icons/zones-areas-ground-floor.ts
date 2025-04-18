import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiZonesAreasGroundFloorIcon],svg[cbi-zones-areas-ground-floor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.66 14.19L16.71 4.28a1 1 0 0 0-1.42 0L4.34 14.19A1 1 0 0 0 5.05 16H7v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V16h2a1 1 0 0 0 .66-1.81M23 26H9v-5h14Z"></svg:path>`,
})
export class CbiZonesAreasGroundFloorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
