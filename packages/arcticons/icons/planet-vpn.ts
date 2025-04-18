import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlanetVpnIcon],svg[arcticons-planet-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="30.549" cy="25.366" r="3.542" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.545 22.928c.414 6.221-2.785 12.127-8.222 15.182s-12.146 2.715-17.247-.872m-5.136-5.94c-3.805-7.53-1.186-16.717 6.016-21.112s16.573-2.523 21.533 4.302"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.75 12.285c9.669-.616 2.667 5.88-4.098 11.373M27.7 27.469C21.508 31.39-.819 41.184 7.226 29.895"></svg:path>`,
})
export class ArcticonsPlanetVpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
