import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderBlockedIcon],svg[tdesign-folder-blocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v5h-2V7H10.52l-2-2.5H3V19h8.5v2H1zm17.5 11a3.5 3.5 0 0 0-3.08 5.165l4.745-4.744A3.5 3.5 0 0 0 18.5 13.5m3.08 1.835l-4.745 4.744a3.5 3.5 0 0 0 4.745-4.745M13 17a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0"></svg:path>`,
})
export class TdesignFolderBlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
