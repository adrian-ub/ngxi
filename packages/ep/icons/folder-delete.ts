import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epFolderDeleteIcon],svg[ep-folder-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32m370.752 448l-90.496-90.496l45.248-45.248L512 530.752l90.496-90.496l45.248 45.248L557.248 576l90.496 90.496l-45.248 45.248L512 621.248l-90.496 90.496l-45.248-45.248z"></svg:path>`,
})
export class EpFolderDeleteIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
