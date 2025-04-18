import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSolidStateDriveIcon],svg[ix-solid-state-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 469.333H320v-42.666h-42.667v42.666H256v-42.666h-42.667v42.666h-128V42.667h341.334v426.666H384v-42.666h-42.667zm10.667-64l32-32v-256l-32-32H160l-32 32v256l32 32zm-32-256V128H192v21.333h-42.667V192H192v21.333h-42.667V256H192v21.333h-42.667V320H192v21.333h128V320h42.667v-42.667H320V256h42.667v-42.667H320V192h42.667v-42.667zm-106.667 0h85.334V320h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxSolidStateDriveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
