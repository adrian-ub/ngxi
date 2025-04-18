import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderSettingFilledIcon],svg[tdesign-folder-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v7.846A6.5 6.5 0 0 0 12.876 21H1z"></svg:path><svg:path fill="currentColor" d="M19 13.126V11.75h-2v1.376a4 4 0 0 0-1.854 1.072l-1.193-.689l-1 1.732l1.192.688a4 4 0 0 0 0 2.142l-1.192.688l1 1.732l1.193-.689A4 4 0 0 0 17 20.874v1.376h2v-1.376a4 4 0 0 0 1.854-1.072l1.193.689l1-1.732l-1.192-.688a4 4 0 0 0 0-2.142l1.192-.688l-1-1.732l-1.193.688A4 4 0 0 0 19 13.127m-2.715 2.844a2 2 0 0 1 3.43 0l.036.063c.159.287.249.616.249.967c0 .35-.09.68-.249.967l-.036.063a2 2 0 0 1-3.43 0l-.036-.063a2 2 0 0 1-.25-.967c0-.35.091-.68.25-.967z"></svg:path>`,
})
export class TdesignFolderSettingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
