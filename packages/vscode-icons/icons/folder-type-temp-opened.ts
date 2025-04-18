import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeTempOpenedIcon],svg[vscode-icons-folder-type-temp-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2e8e80" d="M27.4 5.5h-9.2l-2.1 4.2H4.3v16.8h25.2v-21Zm0 18.7H6.6V11.8h20.8Zm0-14.5h-8.2l1-2.1h7.1v2.1Z"></svg:path><svg:path fill="#2e8e80" d="M25.7 13.7H.5l3.8 12.8h25.2z"></svg:path><svg:path fill="#5fc1b3" d="M21 31a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10m0-18.182A8.182 8.182 0 1 0 29.182 21A8.19 8.19 0 0 0 21 12.818"></svg:path><svg:path fill="#5fc1b3" d="M21.909 21.909h-1.068a.75.75 0 0 1-.75-.75v-6.682a.75.75 0 0 1 .75-.75h.318a.75.75 0 0 1 .75.75Z"></svg:path><svg:path fill="#5fc1b3" d="M27.523 21.909h-6.682a.75.75 0 0 1-.75-.75v-1.068h7.432a.75.75 0 0 1 .75.75v.318a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class VscodeIconsFolderTypeTempOpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
