import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeDevcontainerOpenedIcon],svg[vscode-icons-folder-type-devcontainer-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7baddb" d="M27.4 5.5h-9.2l-2.1 4.2H4.3v4H.5l3.8 12.8h25.2v-21Zm-7.2 2.1h7.1v2.1h-8.1Zm5.5 6.1H6.6v-1.9h20.8v7.626Z"></svg:path><svg:circle cx="21" cy="21" r="10" fill="#193e63"></svg:circle><svg:path fill="#add1ea" d="m17.269 25.816l-1.024-.996l2.419-2.488l-2.417-2.462l1.02-1.001l3.394 3.459zm7.603-2.601l1.024-.996l-2.419-2.488l2.417-2.462l-1.02-1.001l-3.394 3.459z"></svg:path>`,
})
export class VscodeIconsFolderTypeDevcontainerOpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
