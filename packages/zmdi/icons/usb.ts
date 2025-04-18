import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiUsbIcon],svg[zmdi-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218 133h85v86h-21v42q0 18-12.5 30.5T239 304h-64v65q26 13 26 42q0 19-14 33t-33.5 14t-33-14t-13.5-33q0-29 25-42v-65H68q-17 0-29.5-12.5T26 261v-44Q0 204 0 176q0-19 14-33t33-14t33 14t14 33q0 28-26 41v44h64V91H90l64-86l64 86h-43v170h64v-42h-21z"></svg:path>`,
})
export class ZmdiUsbIcon {
  readonly viewBox = input("0 0 304 464")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
