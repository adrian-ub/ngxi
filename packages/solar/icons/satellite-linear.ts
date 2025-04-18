import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSatelliteLinearIcon],svg[solar-satellite-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.47 10.918a5.224 5.224 0 0 1-7.388-7.388m7.388 7.388a5.224 5.224 0 0 0-7.388-7.388m7.388 7.388s-1.847-.615-4.31-3.078m4.31 3.078L14.313 22M13.082 3.53s.616 1.847 3.078 4.31m-3.078-4.31L2 9.687M16.16 7.84L5 19"></svg:path>`,
})
export class SolarSatelliteLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
