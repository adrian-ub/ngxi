import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNetworkWiredIcon],svg[ix-network-wired-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 42.668h170.666v128h-64v64h192v42.667h-64v64h64v128H298.667v-128h64v-64H149.333v64h64v128H42.667v-128h64v-64h-64v-42.667h192v-64h-64zm42.666 42.667h85.334V128h-85.334zM85.333 384h85.334v42.667H85.333zm341.334 0h-85.334v42.667h85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxNetworkWiredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
