import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSatelliteBrokenIcon],svg[solar-satellite-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20.47 10.918s-1.848-.615-4.31-3.078c-2.463-2.463-3.079-4.31-3.079-4.31"></svg:path><svg:path stroke-linecap="round" d="M20.47 10.918a5.224 5.224 0 0 1-7.388-7.388m7.388 7.388A5.224 5.224 0 0 0 18 2.145m2.47 8.773L17.646 16M13.082 3.53A5.2 5.2 0 0 1 15 2.31m-1.918 1.22L6.836 7m9.324.84L11 13M2 9.687l3-1.666M14.313 22l2.187-4M5 19l4-4"></svg:path></svg:g>`,
})
export class SolarSatelliteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
