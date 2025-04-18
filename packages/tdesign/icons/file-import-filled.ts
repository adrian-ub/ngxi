import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileImportFilledIcon],svg[tdesign-file-import-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3v12.232A6.5 6.5 0 0 1 11.124 23H21V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm-9.092 12.002L7.05 14.088l-1.422 1.406l2.48 2.508H.997v2h7.11l-2.48 2.508l1.422 1.406z"></svg:path>`,
})
export class TdesignFileImportFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
