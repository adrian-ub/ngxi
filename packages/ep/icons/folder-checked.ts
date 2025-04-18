import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epFolderCheckedIcon],svg[ep-folder-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32m414.08 502.144l180.992-180.992L736.32 494.4L510.08 720.64l-158.4-158.336l45.248-45.312z"></svg:path>`,
})
export class EpFolderCheckedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
