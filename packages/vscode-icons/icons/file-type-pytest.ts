import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypePytestIcon],svg[vscode-icons-file-type-pytest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#696969" d="M4.86 4.21h22.28a1.1 1.1 0 1 1 0 2.19H4.86a1.1 1.1 0 0 1 0-2.19"></svg:path><svg:path fill="#009fe3" d="M5.05 2h4.48v1.03H5.05zm0 5.53h4.48V30H5.05z"></svg:path><svg:path fill="#c7d302" d="M10.91 2h4.48v1.03h-4.48zm0 5.53h4.48v18.44h-4.48z"></svg:path><svg:path fill="#f07e16" d="M16.7 2h4.47v1.03H16.7zm0 5.53h4.48v12.31H16.7z"></svg:path><svg:path fill="#df2815" d="M22.45 2h4.48v1.03h-4.48zm0 5.53h4.48v7.58h-4.48z"></svg:path>`,
})
export class VscodeIconsFileTypePytestIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
