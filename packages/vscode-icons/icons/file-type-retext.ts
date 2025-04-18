import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeRetextIcon],svg[vscode-icons-file-type-retext-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03d803" d="M14.721 14.546a1.85 1.85 0 0 0-1.165-.318a2 2 0 0 0-1.657.9a4 4 0 0 0-.664 2.436v4.719H9v-9.865h2.235v2.032h.038a3.43 3.43 0 0 1 1.007-1.623a2.27 2.27 0 0 1 1.517-.583a1.9 1.9 0 0 1 .924.183Z"></svg:path><svg:path fill="#d2d2d2" d="M23 22.173a3.9 3.9 0 0 1-1.724.327q-2.871 0-2.87-2.754V14.17h-1.647v-1.752h1.647v-2.282L20.64 9.5v2.918H23v1.752h-2.36v4.93a1.94 1.94 0 0 0 .318 1.252a1.32 1.32 0 0 0 1.06.375A1.54 1.54 0 0 0 23 20.4Z"></svg:path>`,
})
export class VscodeIconsFileTypeRetextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
