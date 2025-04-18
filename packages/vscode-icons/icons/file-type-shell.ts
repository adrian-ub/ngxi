import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeShellIcon],svg[vscode-icons-file-type-shell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d9b400" d="M29.4 27.6H2.5V4.5h26.9Zm-25.9-1h24.9V5.5H3.5Z"></svg:path><svg:path fill="#d9b400" d="m6.077 19.316l-.555-.832l4.844-3.229l-4.887-4.071l.641-.768l5.915 4.928zM12.7 18.2h7.8v1h-7.8zM2.5 5.5h26.9v1.9H2.5z"></svg:path>`,
})
export class VscodeIconsFileTypeShellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
