import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderCopyIcon],svg[ic-sharp-folder-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H1v15h19v-2H3z"></svg:path><svg:path fill="currentColor" d="M23 4h-9l-2-2H5.01L5 17h18z"></svg:path>`,
})
export class IcSharpFolderCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
