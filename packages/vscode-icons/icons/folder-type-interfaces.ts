import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeInterfacesIcon],svg[vscode-icons-folder-type-interfaces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a4b100" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#fff" d="M31.239 18.461H23.3a3.458 3.458 0 1 0-1.874 4.612a3.97 3.97 0 0 0 2.018-1.729h7.789a8.3 8.3 0 0 1 .006-2.883m-11.108 3.026a1.585 1.585 0 1 1 1.585-1.587a1.584 1.584 0 0 1-1.585 1.587"></svg:path><svg:path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" d="M25.239 13.951a7.909 7.909 0 1 0 .772 10.965"></svg:path>`,
})
export class VscodeIconsFolderTypeInterfacesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
