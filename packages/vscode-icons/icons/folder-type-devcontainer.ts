import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeDevcontainerIcon],svg[vscode-icons-folder-type-devcontainer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#558fbf" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:circle cx="21" cy="21" r="10" fill="#193e63"></svg:circle><svg:path fill="#add1ea" d="m17.269 25.816l-1.024-.996l2.419-2.488l-2.417-2.462l1.02-1.001l3.394 3.459zm7.603-2.601l1.024-.996l-2.419-2.488l2.417-2.462l-1.02-1.001l-3.394 3.459z"></svg:path>`,
})
export class VscodeIconsFolderTypeDevcontainerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
