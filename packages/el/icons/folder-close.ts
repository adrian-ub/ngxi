import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFolderCloseIcon],svg[el-folder-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.17 117.7l-83.716 108.033H0v144.653h1200V225.733H591.65L507.935 117.7zM0 410.67v671.63h1200V410.67z"></svg:path>`,
})
export class ElFolderCloseIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
