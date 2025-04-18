import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeCliIcon],svg[vscode-icons-folder-type-cli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#686868" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#d9b400" d="M31 14v17H10V14Z"></svg:path><svg:path d="M10.5 14.5v16h20v-16Zm19.04 15.093h-18.1V15.407h18.12v14.186Zm-15.58-5.066l.68.622L18.5 21.7l-3.92-3.484l-.68.6l3.24 2.88Zm4.54 1.031h6v.711h-6Z"></svg:path>`,
})
export class VscodeIconsFolderTypeCliIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
