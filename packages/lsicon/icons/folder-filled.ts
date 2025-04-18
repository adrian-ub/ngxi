import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFolderFilledIcon],svg[lsicon-folder-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 .354.146L7.707 4.5H13.5a.5.5 0 0 1 .5.5v7.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zM3 4v2.5h10v-1H7.5a.5.5 0 0 1-.354-.146L5.793 4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFolderFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
