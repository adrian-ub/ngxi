import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSatelliteLineDuotoneIcon],svg[solar-satellite-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarSatelliteLineDuotone0"><svg:g fill="none"><svg:path stroke="gray" stroke-width="1.5" d="M20.47 10.918s-1.847-.615-4.31-3.078s-3.078-4.31-3.078-4.31"></svg:path><svg:path fill="gray" d="M16.69 8.37a.75.75 0 0 0-1.06-1.06zm-15.054.661a.75.75 0 0 0 .728 1.312zm12.022 12.605a.75.75 0 0 0 1.31.728zM4.47 18.47a.75.75 0 1 0 1.06 1.06zm8.248-15.595L1.636 9.03l.728 1.312l11.082-6.157zm7.096 7.679l-6.156 11.082l1.31.728l6.157-11.082zM15.63 7.31L4.47 18.47l1.06 1.06L16.69 8.37z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="1.5" d="M13.082 10.918A5.224 5.224 0 1 0 20.47 3.53a5.224 5.224 0 0 0-7.388 7.388Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarSatelliteLineDuotone0)"></svg:path>`,
})
export class SolarSatelliteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
