import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFolderOpenIcon],svg[el-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.17 117.7l-83.716 108.032H0v609.972l123.572-465.318H993.75V225.732h-402.1L507.935 117.7zM0 1016.612v65.688h993.75L1200 410.669H175.134z"></svg:path>`,
})
export class ElFolderOpenIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
