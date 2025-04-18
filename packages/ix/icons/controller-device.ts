import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixControllerDeviceIcon],svg[ix-controller-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.334 42.667v426.667H106.667V42.667zm-42.667 42.667H149.334v341.333h213.333zm-85.333 256V384h-42.667v-42.666zm64-234.667v192H170.667v-192zm-42.667 42.667h-85.333V256h85.333z"></svg:path>`,
})
export class IxControllerDeviceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
