import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVpnhotspotIcon],svg[arcticons-vpnhotspot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.94 27.21a14.07 14.07 0 0 1-6.49 9.06m-14.45 0a14.06 14.06 0 1 1 20.75-15.81c.07.25.14.51.19.77"></svg:path><svg:circle cx="19.21" cy="24.22" r="3.95" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.42 27.21a8.75 8.75 0 1 1 0-6h16.73v6H41v6.9h-6.11v-6.9Z"></svg:path>`,
})
export class ArcticonsVpnhotspotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
