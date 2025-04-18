import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHardwareCabinetIcon],svg[ix-hardware-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.334 469.334V42.667H106.667v426.667zm-42.667-85.333H149.334V85.334h213.333zM213.334 192v-85.334h-42.667V192zm128-21.334V128H234.667v42.666zm-64 106.667v-64h-42.667v64zm64 0v-64h-42.667v64zm-128 0v-64h-42.667v64zm128 85.333v-64H170.667v64z"></svg:path>`,
})
export class IxHardwareCabinetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
