import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlcDeviceTagIcon],svg[ix-plc-device-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64h384v236.497L384 257.83V106.667h-42.667V256h-42.666V106.667H256V448H42.667zm42.666 42.667v298.666h128V106.667zm288 170.666l117.334 117.334l-96 96l-117.334-117.334v-96zm-32 42.667H320v21.333h21.333zM192 128h-85.333v106.667H192zm-85.333 192H128v21.333h-21.333zM192 320h-21.333v21.333H192zm-53.333-42.667H160v21.334h-21.333zM160 362.667h-21.333V384H160z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlcDeviceTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
