import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeAppsembleIcon],svg[vscode-icons-file-type-appsemble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a6cfff" d="M8 3h1.607a5 5 0 0 1 5 5v6.607H3V8a5 5 0 0 1 5-5"></svg:path><svg:path fill="#4a90e2" d="M22.393 3H29v11.607h-6.607a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5"></svg:path><svg:path fill="#a6cfff" d="M14.607 29H3V17.393h11.607z"></svg:path><svg:path fill="#4a90e2" d="M24 29h-6.607V17.393H24a5 5 0 0 1 5 5V24a5 5 0 0 1-5 5"></svg:path>`,
})
export class VscodeIconsFileTypeAppsembleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
