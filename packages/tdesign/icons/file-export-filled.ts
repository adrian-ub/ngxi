import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileExportFilledIcon],svg[tdesign-file-export-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3v22h9.876A6.5 6.5 0 0 1 21 13.232V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm2.908 12.002l-4.858-4.914l-1.422 1.406l2.48 2.508h-7.11v2h7.11l-2.48 2.508l1.422 1.406z"></svg:path>`,
})
export class TdesignFileExportFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
