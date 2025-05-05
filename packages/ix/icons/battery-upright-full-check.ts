import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightFullCheckIcon],svg[ix-battery-upright-full-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 85.333V42.667h-85.334v42.666H128v384h256v-384zm-.581 119.75l35.501 23.668l-79.601 119.402l-76.153-76.152l30.17-30.17l39.339 39.322z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightFullCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
