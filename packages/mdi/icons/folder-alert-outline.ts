import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderAlertOutlineIcon],svg[mdi-folder-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h2v5h-2zm0 6h2v2h-2zm1-9c1.07 0 2.09.24 3 .67V8H3v10h6.29A7 7 0 0 1 9 16a7 7 0 0 1 7-7m7 7a7 7 0 0 1-7 7c-2.38 0-4.5-1.19-5.75-3H3a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v3.1c1.24 1.26 2 2.99 2 4.9m-7-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiFolderAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
