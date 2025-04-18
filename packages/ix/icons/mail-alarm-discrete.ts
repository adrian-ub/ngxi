import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMailAlarmDiscreteIcon],svg[ix-mail-alarm-discrete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64v298.667h170.666V320h-128V128l149.334 129.013L384 128v170.667h42.667V64zm304 42.667l-112 96l-112-96zm80 320V320h-192v106.667h-64v42.666h106.666V362.667H384v106.666h106.667v-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxMailAlarmDiscreteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
