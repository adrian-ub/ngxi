import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeTestcafeIcon],svg[vscode-icons-file-type-testcafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#36b6e5" d="M28.115 9.432L25.701 7L15.562 17.216L11.7 13.324l-2.413 2.433l6.275 6.324z"></svg:path><svg:path fill="#d2d2d2" d="m19.425 19.151l-1.194 1.05h4.181l3.584 3.299H5.986l3.584-3.299h3.136l-1.045-1.05H8.824L2 25h28l-6.841-5.849z"></svg:path>`,
})
export class VscodeIconsFileTypeTestcafeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
