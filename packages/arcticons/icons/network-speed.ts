import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetworkSpeedIcon],svg[arcticons-network-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.628 24.08a14.704 14.704 0 0 0-22.673 1.725"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 20.585a23.808 23.808 0 0 0-39 0m39 0l-21.483 8.463a5.558 5.558 0 1 0 6.212 8.779l.015.02Z"></svg:path>`,
})
export class ArcticonsNetworkSpeedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
