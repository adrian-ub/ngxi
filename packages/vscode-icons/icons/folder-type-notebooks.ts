import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeNotebooksIcon],svg[vscode-icons-folder-type-notebooks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a5a5a5" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21zm0 4.2h-8.2l1.1-2.1h7.1z"></svg:path><svg:path fill="#767677" d="M30.809 9.233a1.383 1.383 0 1 1-1.44-1.3a1.367 1.367 0 0 1 1.44 1.297z"></svg:path><svg:path fill="#f37726" d="M22.74 25.213c-3.673 0-6.9-1.318-8.569-3.265a9.136 9.136 0 0 0 17.138 0c-1.665 1.946-4.88 3.265-8.569 3.265m0-12.657c3.673 0 6.9 1.318 8.57 3.264a9.136 9.136 0 0 0-17.139 0c1.67-1.95 4.88-3.264 8.57-3.264"></svg:path><svg:path fill="#9e9e9e" d="M17.686 29a1.726 1.726 0 1 1-.164-.654a1.7 1.7 0 0 1 .164.655"></svg:path><svg:path fill="#616262" d="M14.589 12.112a1.003 1.003 0 1 1 .975-1.044a1.016 1.016 0 0 1-.975 1.044"></svg:path>`,
})
export class VscodeIconsFolderTypeNotebooksIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
