import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMachineBFilledIcon],svg[ix-machine-b-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 42.667H384v106.666h-42.667v-64h-192v21.334h149.334v128h-32v64H224v-64h-32v-85.334h-85.333zm64 128v170.666H320V170.667h106.667V448H64V170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxMachineBFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
