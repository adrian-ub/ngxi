import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightCheckIcon],svg[ix-battery-upright-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M202.666 85.333H128v384h256v-384h-74.667l.001-42.666H202.667zm-31.999 341.334V128h170.667v298.667zm127.417-221.584l35.5 23.667l-79.601 119.402L177.831 272L208 241.83l39.339 39.322z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
