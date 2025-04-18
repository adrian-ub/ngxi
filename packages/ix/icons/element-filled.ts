import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixElementFilledIcon],svg[ix-element-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64H298.667v149.333H448zM234.667 85.333H85.333v149.334h149.334zm-149.334 192h149.334v149.334H85.333zm341.334 0H277.333v149.334h149.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxElementFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
