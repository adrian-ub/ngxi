import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderZip24RegularIcon],svg[fluent-folder-zip-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 8V6.25c0-.966.784-1.75 1.75-1.75h2.879a.75.75 0 0 1 .53.22l1.53 1.53l-1.53 1.53a.75.75 0 0 1-.53.22zm1.75-5A3.25 3.25 0 0 0 2 6.25v11.5A3.25 3.25 0 0 0 5.25 21h13.5A3.25 3.25 0 0 0 22 17.75v-9a3.25 3.25 0 0 0-3.25-3.25h-7.19L9.72 3.659A2.25 2.25 0 0 0 8.129 3zm8.25 4v3.25c0 .414.336.75.75.75H15v2h-.25a.75.75 0 0 0 0 1.5H15V16h-.25a.75.75 0 0 0 0 1.5H15v2H5.25a1.75 1.75 0 0 1-1.75-1.75V9.5h4.629a2.25 2.25 0 0 0 1.59-.659L11.562 7zm3 12.5V16h.25a.75.75 0 0 0 0-1.5h-.25V11h.75a.75.75 0 0 0 .75-.75V7h.75c.966 0 1.75.784 1.75 1.75v9a1.75 1.75 0 0 1-1.75 1.75zm0-12.5v2.5H15V7z"></svg:path>`,
})
export class FluentFolderZip24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
