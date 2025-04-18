import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBatteryAlertIcon],svg[zmdi-battery-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185 45q12 0 20 8.5t8 20.5v327q0 12-8 20t-20 8H28q-11 0-19.5-8T0 401V74q0-12 8.5-20.5T28 45h36V3h85v42zm-57 299v-43H85v43zm0-85V152H85v107z"></svg:path>`,
})
export class ZmdiBatteryAlertIcon {
  readonly viewBox = input("0 0 216 432")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
