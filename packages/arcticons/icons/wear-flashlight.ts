import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWearFlashlightIcon],svg[arcticons-wear-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="9.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.4 4.5l-1.594 9.52A14.3 14.3 0 0 0 9.7 24a14.3 14.3 0 0 0 4.107 9.98L15.4 43.5h17.199l1.594-9.52A14.3 14.3 0 0 0 38.3 24a14.3 14.3 0 0 0-4.117-10.035L32.599 4.5zM40 24h2.5m-4.644-7.999l2.166-1.25m-2.185 17.238l2.184 1.261m-.566-13.391l2.414-.647m-2.435 8.924l2.436.653M8 24.02H5.5m4.644-8l-2.166-1.25m2.185 17.239L7.979 33.27m.565-13.392l-2.414-.647m2.436 8.924l-2.436.653"></svg:path>`,
})
export class ArcticonsWearFlashlightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
