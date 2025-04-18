import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileSettingFilledIcon],svg[tdesign-file-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3v22h10.846A6.5 6.5 0 0 1 21 12.232V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm-2 7.126V12.75h-2v1.376a4 4 0 0 0-1.854 1.072l-1.193-.689l-1 1.732l1.192.688a4 4 0 0 0 0 2.142l-1.192.688l1 1.732l1.193-.689A4 4 0 0 0 17 21.874v1.376h2v-1.376a4 4 0 0 0 1.854-1.072l1.193.689l1-1.732l-1.192-.688a4 4 0 0 0 0-2.142l1.192-.688l-1-1.732l-1.193.688A4 4 0 0 0 19 14.127m-2.715 2.844a2 2 0 0 1 3.43 0l.036.063c.159.287.249.616.249.967c0 .35-.09.68-.249.967l-.036.063a2 2 0 0 1-3.43 0l-.036-.063a2 2 0 0 1-.25-.967c0-.35.091-.68.25-.967z"></svg:path>`,
})
export class TdesignFileSettingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
