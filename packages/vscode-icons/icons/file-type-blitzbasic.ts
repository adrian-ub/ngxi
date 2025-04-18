import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeBlitzbasicIcon],svg[vscode-icons-file-type-blitzbasic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00ffae" d="M4 9v3h1v7H4v3h10v-1h1v-1h1v-4h-1v-1h1v-4h-1v-1h-1V9zm6 3h2v2h-2zm0 5h2v2h-2z"></svg:path><svg:path fill="#00d8ff" d="M16 9v3h1v7h-1v3h10v-1h1v-1h1v-4h-1v-1h1v-4h-1v-1h-1V9zm5 3h2v2h-2zm0 5h2v2h-2z"></svg:path>`,
})
export class VscodeIconsFileTypeBlitzbasicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
