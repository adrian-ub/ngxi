import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixListAddIcon],svg[ix-list-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h64v42.667H64zm0 106.667h64v42.666H64zm64 106.666H64V320h64zM170.667 64H448v42.667H170.667zM448 170.667H170.667v42.666H448zM170.667 277.333h170.666V320H170.667zm320 106.667h-64v-64H384v64h-64v42.667h64v64h42.667v-64h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxListAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
