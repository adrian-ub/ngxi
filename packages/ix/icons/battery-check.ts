import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryCheckIcon],svg[ix-battery-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 128v74.666h42.667v106.667h-42.667V384h-384V128zM384 170.667H85.334v170.666H384zm-107.25 13.082l35.501 23.668l-79.602 119.402l-76.152-76.152l30.17-30.17l39.339 39.322z"></svg:path>`,
})
export class IxBatteryCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
