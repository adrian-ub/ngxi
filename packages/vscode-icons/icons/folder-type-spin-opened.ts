import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeSpinOpenedIcon],svg[vscode-icons-folder-type-spin-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b3b3b3" d="M27.4 5.5h-9.2l-2.1 4.2H4.3v4H.5l3.8 12.8h25.2v-21zm-7.2 2.1h7.1v2.1h-8.1zm5.5 6.1H6.6v-1.9h20.8v7.626z"></svg:path><svg:path d="M20.91 14.457h1.687v16.297H20.91z"></svg:path><svg:path d="M23.813 15.81a6.738 6.774 0 0 0-6.739 6.775a6.738 6.774 0 0 0 6.739 6.774a6.738 6.774 0 0 0 6.738-6.774a6.738 6.774 0 0 0-6.738-6.775m.02 1.628a5.14 5.168 0 0 1 5.141 5.167a5.14 5.168 0 0 1-5.14 5.168a5.14 5.168 0 0 1-5.14-5.169a5.14 5.168 0 0 1 5.14-5.166"></svg:path>`,
})
export class VscodeIconsFolderTypeSpinOpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
