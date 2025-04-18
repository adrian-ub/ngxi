import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDownloadCloud2LineIcon],svg[ri-download-cloud-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13v5.585l1.828-1.828l1.415 1.415L12 22.414l-4.243-4.242l1.415-1.415L11 18.585V13zM12 2a7 7 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978v-2.014a3.5 3.5 0 1 0-1.111-6.91a5 5 0 1 0-9.777 0a3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2"></svg:path>`,
})
export class RiDownloadCloud2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
