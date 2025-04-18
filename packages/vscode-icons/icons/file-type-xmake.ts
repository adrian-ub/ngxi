import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeXmakeIcon],svg[vscode-icons-file-type-xmake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="14" fill="#e0f2f1"></svg:circle><svg:path fill="#e0f2f1" d="M23.518 5.888A12.6 12.6 0 0 0 5.654 8.811l6.562 4.047Z"></svg:path><svg:path fill="#8bc34a" d="m3.591 18.177l8.625-5.319l-6.562-4.047A12.54 12.54 0 0 0 3.4 16a12.7 12.7 0 0 0 .191 2.177"></svg:path><svg:path fill="#3dafa4" d="M27.072 22.019a12.61 12.61 0 0 0-3.554-16.131l-11.3 6.97Z"></svg:path><svg:path fill="#22a079" d="M3.591 18.177a12.6 12.6 0 0 0 23.481 3.842l-14.856-9.161Z"></svg:path>`,
})
export class VscodeIconsFileTypeXmakeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
