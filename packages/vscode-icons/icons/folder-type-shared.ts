import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeSharedIcon],svg[vscode-icons-folder-type-shared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="vscodeIconsFolderTypeShared0"><svg:path fill="none" d="M0 0h32v32H0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#vscodeIconsFolderTypeShared0)"><svg:path fill="#764af1" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#b094ff" d="M15 11a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6.17a3 3 0 1 0 0-2H15a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4Zm12 20a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-6.17a3 3 0 1 0 0 2H27a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2h-2a4 4 0 0 0 4 4Z"></svg:path><svg:path fill="#b094ff" d="M17 26.5v.5h2v-.5Z"></svg:path></svg:g>`,
})
export class VscodeIconsFolderTypeSharedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
