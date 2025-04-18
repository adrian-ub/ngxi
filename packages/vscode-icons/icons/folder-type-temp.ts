import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeTempIcon],svg[vscode-icons-folder-type-temp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#34756b" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#5fc1b3" d="M21 31a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10m0-18.182A8.182 8.182 0 1 0 29.182 21A8.19 8.19 0 0 0 21 12.818"></svg:path><svg:path fill="#5fc1b3" d="M21.909 21.909h-1.068a.75.75 0 0 1-.75-.75v-6.682a.75.75 0 0 1 .75-.75h.318a.75.75 0 0 1 .75.75Z"></svg:path><svg:path fill="#5fc1b3" d="M27.523 21.909h-6.682a.75.75 0 0 1-.75-.75v-1.068h7.432a.75.75 0 0 1 .75.75v.318a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class VscodeIconsFolderTypeTempIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
