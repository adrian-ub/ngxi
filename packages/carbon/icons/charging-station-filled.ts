import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChargingStationFilledIcon],svg[carbon-charging-station-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 7V4h-2v3h-1v6h1v11.5a1.5 1.5 0 0 1-3 0V16a1 1 0 0 0-1-1h-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v21H2v2h19v-2h-2v-9h3v7.5a3.5 3.5 0 0 0 7 0V13h1V7ZM11.857 21.515l-1.714-1.03L12.233 17h-5l3.91-6.515l1.714 1.03L10.767 15h5Z"></svg:path><svg:path fill="none" d="m11.857 21.514l-1.714-1.028L12.234 17h-5l3.909-6.514l1.714 1.028L10.766 15h5z"></svg:path>`,
})
export class CarbonChargingStationFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
