import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrackerNetworkIcon],svg[arcticons-tracker-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 16.986h25.673V24H23.19m1.987 0l4.294 7.014M11.234 16.986v14.028m8.417-14.028v14.028M43.5 16.986v14.028l-9.119-14.028v14.028"></svg:path>`,
})
export class ArcticonsTrackerNetworkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
