import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFolderIcon],svg[el-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.17 117.7l-83.716 108.032H0V1082.3h1200V225.732H591.65L507.935 117.7z"></svg:path>`,
})
export class ElFolderIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
