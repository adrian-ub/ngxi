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
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 213.333h42.667v85.334h-42.667V384h-384V128h384zm-341.333 128H384V170.667H85.334zm228.295-136.332l-35.501-23.668l-50.744 76.07l-39.339-39.322l-30.17 30.17l76.152 76.152z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
