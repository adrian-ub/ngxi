import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderImportFilledIcon],svg[tdesign-folder-import-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v16H11.268A6.5 6.5 0 0 0 1 13.31z"></svg:path><svg:path fill="currentColor" d="M10.908 18.002L6.05 13.088l-1.422 1.406l2.48 2.508h-7.11v2h7.11l-2.48 2.508l1.422 1.406z"></svg:path>`,
})
export class TdesignFolderImportFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
