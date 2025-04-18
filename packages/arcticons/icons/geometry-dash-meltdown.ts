import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeometryDashMeltdownIcon],svg[arcticons-geometry-dash-meltdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m37.171 21.02l2.175-2.174L44.5 24L24 44.5l-5.154-5.155l2.34-2.34m2.804-2.804l3.636-3.636m3.017-3.017l3.484-3.484M18.49 34.196l-2.397 2.397L3.5 24L24 3.5l12.593 12.593l-2.216 2.216m-2.773 2.773l-3.791 3.791m-2.94 2.94l-3.675 3.675"></svg:path><svg:path d="m21.91 24.77l2.9-2.9l8.752 8.756l-2.9 2.898zm-5.563 7.087l2.579-2.563l7.2 7.24l-2.578 2.564zm12.998-13.075l2.578-2.564l7.201 7.241l-2.578 2.564z"></svg:path><svg:circle cx="13.384" cy="24.215" r="3.713"></svg:circle><svg:circle cx="24.293" cy="13.384" r="3.713"></svg:circle></svg:g>`,
})
export class ArcticonsGeometryDashMeltdownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
