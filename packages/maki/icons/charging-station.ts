import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiChargingStationIcon],svg[maki-charging-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.646 7.801L7.752.838a.826.826 0 0 1 1.463.705L8.086 5.684A.25.25 0 0 0 8.327 6h3.42a.753.753 0 0 1 .607 1.199l-5.106 6.964a.826.826 0 0 1-1.463-.706l1.129-4.141A.25.25 0 0 0 6.673 9h-3.42a.753.753 0 0 1-.607-1.199"></svg:path>`,
})
export class MakiChargingStationIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
