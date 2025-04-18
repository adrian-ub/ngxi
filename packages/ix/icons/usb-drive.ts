import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUsbDriveIcon],svg[ix-usb-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M362.667 42.667v128H384V384c0 47.128-38.205 85.333-85.333 85.333h-85.334C166.205 469.333 128 431.128 128 384V170.667h21.333v-128zm-21.334 170.666H170.667V384c0 22.493 17.405 40.921 39.482 42.55l3.184.117h85.334c23.564 0 42.666-19.103 42.666-42.667zM320 85.333H192v85.334h128zm-85.333 21.334V128h-21.334v-21.333zm64 0V128h-21.334v-21.333z"></svg:path>`,
})
export class IxUsbDriveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
