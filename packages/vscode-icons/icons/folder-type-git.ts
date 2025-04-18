import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeGitIcon],svg[vscode-icons-folder-type-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#bf5e55" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#dd4c35" d="M30.6 19.565L21.435 10.4a1.35 1.35 0 0 0-1.913 0l-1.9 1.9l2.415 2.415a1.606 1.606 0 0 1 2.034 2.047l2.329 2.329a1.607 1.607 0 1 1-.964.907l-2.176-2.171v5.713a1.606 1.606 0 1 1-1.323-.047v-5.766a1.61 1.61 0 0 1-.873-2.11l-2.381-2.381l-6.283 6.286a1.353 1.353 0 0 0 0 1.913l9.165 9.165a1.353 1.353 0 0 0 1.913 0l9.122-9.122a1.353 1.353 0 0 0 0-1.913"></svg:path><svg:path fill="#fff" d="m17.619 12.3l2.415 2.415a1.606 1.606 0 0 1 2.034 2.047l2.332 2.329a1.607 1.607 0 1 1-.964.907l-2.176-2.171v5.713a1.606 1.606 0 1 1-1.323-.047v-5.766a1.61 1.61 0 0 1-.873-2.11l-2.381-2.381"></svg:path>`,
})
export class VscodeIconsFolderTypeGitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
