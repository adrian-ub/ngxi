import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsDefaultRootFolderIcon],svg[vscode-icons-default-root-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c09553" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#c09553" d="M19.735 31.25h-5.924l9.794-21.5h5.985z"></svg:path><svg:path fill="#ffeebe" d="M23.766 10H29.2l-9.625 21H14.2Z"></svg:path>`,
})
export class VscodeIconsDefaultRootFolderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
