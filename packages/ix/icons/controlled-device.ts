import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixControlledDeviceIcon],svg[ix-controlled-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 469.334v-192h63.999v128h170.667V106.667H192l-.001 128.001h-64v-192H85.334v426.666zm192-106.667h-85.334V149.334H320zm-21.334-149.333v-42.667H256v42.667zm0 64v-42.667H256v42.667z"></svg:path>`,
})
export class IxControlledDeviceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
