import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightTmuxIcon],svg[vscode-icons-file-type-light-tmux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1bb91f" fill-rule="evenodd" d="M2 22.3h28v5.07A2.63 2.63 0 0 1 27.38 30H4.63A2.62 2.62 0 0 1 2 27.37zm0 0h28v5.25H2z"></svg:path><svg:path fill="#3c3c3c" d="M16.52 14.25V2h-1.05v25.55h1.05V15.3H30v-1.05zM2 4.63A2.63 2.63 0 0 1 4.62 2h22.75A2.63 2.63 0 0 1 30 4.63v22.92H2z"></svg:path>`,
})
export class VscodeIconsFileTypeLightTmuxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
