import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypePytestIcon],svg[vscode-icons-folder-type-pytest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0084bf" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#696969" d="M11.99 12.04H27.5a.77.77 0 1 1 0 1.52H11.99a.77.77 0 0 1 0-1.52"></svg:path><svg:path fill="#009fe3" d="M12.12 10.5h3.12v.72h-3.12zm0 3.85h3.12V30h-3.12z"></svg:path><svg:path fill="#c7d302" d="M16.2 10.5h3.12v.72H16.2zm0 3.85h3.12v12.84H16.2z"></svg:path><svg:path fill="#f07e16" d="M20.23 10.5h3.12v.72h-3.12zm0 3.85h3.12v8.57h-3.12z"></svg:path><svg:path fill="#df2815" d="M24.24 10.5h3.12v.72h-3.12zm0 3.85h3.12v5.28h-3.12z"></svg:path>`,
})
export class VscodeIconsFolderTypePytestIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
