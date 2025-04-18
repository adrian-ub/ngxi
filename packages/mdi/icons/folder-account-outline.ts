import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderAccountOutlineIcon],svg[mdi-folder-account-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14c1.33 0 4 .67 4 2v1h-8v-1c0-1.33 2.67-2 4-2m0-1c1.11 0 2-.89 2-2s-.89-2-2-2a2 2 0 1 0 0 4m7-5v10c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6l2 2h8a2 2 0 0 1 2 2m-2 0H4v10h16z"></svg:path>`,
})
export class MdiFolderAccountOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
