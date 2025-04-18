import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropBrokenIcon],svg[solar-waterdrop-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3.447 16A9 9 0 0 1 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.43 5.43 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22h-.777A8.47 8.47 0 0 1 6 19.874"></svg:path><svg:path d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"></svg:path></svg:g>`,
})
export class SolarWaterdropBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
