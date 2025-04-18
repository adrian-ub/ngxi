import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsDefaultRootFolderOpenedIcon],svg[vscode-icons-default-root-folder-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#dcb67a" d="M27.4 5.5h-9.2l-2.1 4.2H4.3v16.8h25.2v-21Zm0 18.7H6.6V11.8h20.8Zm0-14.5h-8.2l1-2.1h7.1v2.1Z"></svg:path><svg:path fill="#dcb67a" d="M25.7 13.7H.5l3.8 12.8h25.2z"></svg:path><svg:path fill="#dcb67a" d="M19.635 31.25h-5.924l9.794-21.5h5.985z"></svg:path><svg:path fill="#ffeebe" d="M23.666 10H29.1l-9.625 21H14.1Z"></svg:path>`,
})
export class VscodeIconsDefaultRootFolderOpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
