import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMultiplePlusOutlineIcon],svg[mdi-folder-multiple-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h6l2 2zM2 6v14h18v2H2c-1.1 0-2-.9-2-2V6zm4 0v10h16V6zm8 4h2V8h2v2h2v2h-2v2h-2v-2h-2z"></svg:path>`,
})
export class MdiFolderMultiplePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
