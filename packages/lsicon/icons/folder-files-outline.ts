import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFolderFilesOutlineIcon],svg[lsicon-folder-files-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M3.5 4.5v-2h9V6m-10 2h11m-11-3.5v8h11V6h-6L6 4.5z"></svg:path>`,
})
export class LsiconFolderFilesOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
