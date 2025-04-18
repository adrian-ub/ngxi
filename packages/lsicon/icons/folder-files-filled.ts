import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFolderFilesFilledIcon],svg[lsicon-folder-files-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v3h.5a.5.5 0 0 1 .5.5v6.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5H3zM3 5v2.5h10v-1H7.5a.5.5 0 0 1-.354-.146L5.793 5zm9 .5V3H4v1h2a.5.5 0 0 1 .354.146L7.707 5.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFolderFilesFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
