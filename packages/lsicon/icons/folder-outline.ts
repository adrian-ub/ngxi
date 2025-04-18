import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFolderOutlineIcon],svg[lsicon-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2.5 7h11m-11-3.5v9h11V5h-6L6 3.5z"></svg:path>`,
})
export class LsiconFolderOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
