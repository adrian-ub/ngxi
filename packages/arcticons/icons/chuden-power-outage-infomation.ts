import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChudenPowerOutageInfomationIcon],svg[arcticons-chuden-power-outage-infomation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 6.5L5.5 17.181V41.5h37V17.181z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27 41.5v-6.016c3.59-1.25 5.99-4.655 6-8.484a9 9 0 1 0-18 0c.01 3.83 2.41 7.234 6 8.484V41.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.553 30.835L25.67 27h-3.34l2.117-3.836"></svg:path>`,
})
export class ArcticonsChudenPowerOutageInfomationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
