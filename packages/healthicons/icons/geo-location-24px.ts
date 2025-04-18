import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsGeoLocation24pxIcon],svg[healthicons-geo-location-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.45 20.281c2.672-3.119 6.05-7.063 6.05-10.61C19.5 5.435 16.142 2 12 2S4.5 5.435 4.5 9.671c0 3.547 3.378 7.491 6.05 10.61c.52.608 1.014 1.183 1.45 1.719c.436-.536.93-1.111 1.45-1.719M12 12a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsGeoLocation24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
