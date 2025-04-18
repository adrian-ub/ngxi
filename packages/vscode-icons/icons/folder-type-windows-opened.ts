import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeWindowsOpenedIcon],svg[vscode-icons-folder-type-windows-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7baddb" d="M27.9 6h-9.7l-2 4H5v17h25V6Zm.1 18H7V12h21Zm.1-14h-7.8l1-2H28Z"></svg:path><svg:path fill="#7baddb" d="M25.9 14H.3l3.8 13h25.6z"></svg:path><svg:path fill="#0078d6" d="m10 12.974l8.582-1.166v8.253L10 20.109Zm8.577 8.037l.008 8.261l-8.579-1.172v-7.14Zm1.041-9.355L31 10v9.956l-11.379.089ZM31 21.089V31l-11.382-1.6l-.018-8.33Z"></svg:path>`,
})
export class VscodeIconsFolderTypeWindowsOpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
