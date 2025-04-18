import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeCertificateIcon],svg[vscode-icons-folder-type-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#574923" d="M27.9 6h-9.8l-2 4H5v17h25V6Zm.1 4h-7.8l1-2H28Z"></svg:path><svg:path fill="#af9347" d="M23.045 12.658a4.285 4.285 0 0 0-4.269 4.269v3.56h-2.135v9.257h12.813v-9.257H27.32V16.93a4.284 4.284 0 0 0-4.275-4.272m0 1.424a2.84 2.84 0 0 1 2.849 2.827v3.581H20.2v-3.56a2.837 2.837 0 0 1 2.822-2.851h.005Z"></svg:path>`,
})
export class VscodeIconsFolderTypeCertificateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
