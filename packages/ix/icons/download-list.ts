import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDownloadListIcon],svg[ix-download-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M490.667 448v42.667H384V448zm-128 0v42.667H320V448zm128-64v42.667H384V384zm-128 0v42.667H320V384zm-64 0v42.667H64V384zm192-64v42.667H384V320zm-128 0v42.667H320V320zM256 42.667v210.56l93.013-77.653l27.307 32.853L234.667 326.4L93.013 208.427l27.307-32.853l93.013 77.653V42.667z"></svg:path>`,
})
export class IxDownloadListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
