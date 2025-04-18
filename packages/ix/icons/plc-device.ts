import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlcDeviceIcon],svg[ix-plc-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64v384h384V64zm42.667 341.333V106.667h128v298.666zm170.666 0V106.667H320v298.666zm85.334 0V106.667h42.666v298.666zM213.333 128H128v106.667h85.333zM128 320h21.333v21.333H128zm85.333 0H192v21.333h21.333zM160 277.333h21.333v21.334H160zm21.333 85.334H160V384h21.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlcDeviceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
