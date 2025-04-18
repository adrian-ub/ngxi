import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAppDashIcon],svg[arcticons-app-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.806 42.5V21.944L5.5 28.111V42.5zM33.25 25.028v-14.39l-11.306 6.168V42.5h9.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.194 42.5V24L42.5 30.167V42.5zm-4.111-28.778V5.5L14.75 12.694v10.278M16.806 42.5h5.138"></svg:path>`,
})
export class ArcticonsAppDashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
