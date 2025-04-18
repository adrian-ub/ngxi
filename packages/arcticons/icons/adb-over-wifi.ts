import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdbOverWifiIcon],svg[arcticons-adb-over-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 41.331c0-10.756 8.283-19.476 18.5-19.476s18.5 8.72 18.5 19.476z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.238 29.888c1.34 0 2.435 1.094 2.435 2.434s-1.094 2.435-2.435 2.435c-1.351 0-2.434-1.094-2.434-2.435s1.083-2.434 2.434-2.434M20.3 15.345q3.7-2.928 7.4 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.522 13.275q6.478-6.327 12.956 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.745 11.206q9.255-9.075 18.51 0m-19.969 3.592l2.392 9.009m16.644 0l2.392-9.009m-1.952 15.09a2.434 2.434 0 1 1 .002 4.87a2.434 2.434 0 0 1-.002-4.87"></svg:path>`,
})
export class ArcticonsAdbOverWifiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
