import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeGradle2Icon],svg[vscode-icons-file-type-gradle2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#006533" d="M13.5 6.965h7.923l4 6.887h4.557a14.1 14.1 0 0 0-18.956-10.92z"></svg:path><svg:path fill="#82b816" d="m25.628 18l-4.209 7.252H10.806L5.5 16.108L9.739 8.8L7.4 4.981A14.03 14.03 0 1 0 30 18z"></svg:path><svg:path fill="#006532" d="M21.061 15.963a5.026 5.026 0 1 1-5.026-5a5.013 5.013 0 0 1 5.026 5"></svg:path>`,
})
export class VscodeIconsFileTypeGradle2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
