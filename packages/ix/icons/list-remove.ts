import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixListRemoveIcon],svg[ix-list-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h64v42.667H64zm0 106.667h64v42.666H64zm64 106.666H64V320h64zM170.667 64H448v42.667H170.667zM448 170.667H170.667v42.666H448zM170.667 277.333H448V320H170.667zm320 106.667H320v42.667h170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxListRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
