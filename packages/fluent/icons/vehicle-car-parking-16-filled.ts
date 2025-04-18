import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVehicleCarParking16FilledIcon],svg[fluent-vehicle-car-parking-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H13v8.5a.5.5 0 0 1-1 0V6h-1.5a.5.5 0 0 1-.5-.5zM5.319 2H9v1H5.319a1 1 0 0 0-.992.872L4.052 6h5.033A1.5 1.5 0 0 0 10.5 7h.5v1.294A.748.748 0 0 0 10 9a.75.75 0 0 0 1 .706V12H3.5A1.5 1.5 0 0 1 2 10.5v-3a1.5 1.5 0 0 1 1.034-1.426L3.044 6H2.5a.5.5 0 0 1 0-1h.673l.162-1.256A2 2 0 0 1 5.32 2m-.07 7.749a.749.749 0 1 0 0-1.498a.749.749 0 0 0 0 1.498M5 13H3.5v.25a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class FluentVehicleCarParking16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
