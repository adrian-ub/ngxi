import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDeviceViewFlatIcon],svg[ix-device-view-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 362.667v106.666H213.333V362.667zm-42.667 42.666H256v21.334h149.333zM64 106.667h128V128H85.333v128H192v21.333H85.333v128H192v21.334H64zm384 106.666V320H213.333V213.333zM405.333 256H256v21.333h149.333zM448 64v106.667H213.333V64zm-42.667 42.667H256V128h149.333z"></svg:path>`,
})
export class IxDeviceViewFlatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
