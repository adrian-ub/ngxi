import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsElectricalThresholdIcon],svg[flat-color-icons-electrical-threshold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#80DEEA" d="M3 12h42v24H3z"></svg:path><svg:path fill="#03A9F4" d="M3 23h42v2H3z"></svg:path><svg:path fill="none" stroke="#3F51B5" stroke-miterlimit="10" stroke-width="4" d="m4 18l4.5-1.5c.9-.3 1.9.1 2.3.9l8.7 14.3c.7 1.2 2.4 1.3 3.2.2l2.3-2.8c.5-.6 1.4-.9 2.2-.6l3 1c1 .3 2.1-.2 2.5-1.1L37 18.3c.5-1.1 1.9-1.6 2.9-.9l4 2.7"></svg:path>`,
})
export class FlatColorIconsElectricalThresholdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
