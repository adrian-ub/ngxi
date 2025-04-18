import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMonitorSmartphoneLinearIcon],svg[solar-monitor-smartphone-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h5.5c2.335 0 3.502 0 4.386.472a4 4 0 0 1 1.642 1.642C22 4.998 22 6.165 22 8.5"></svg:path><svg:path d="M14 15c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z"></svg:path><svg:path stroke-linecap="round" d="M19 20h-2m-6 2H8m3 0v-5m0-4H2"></svg:path></svg:g>`,
})
export class SolarMonitorSmartphoneLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
