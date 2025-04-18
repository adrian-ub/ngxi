import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeVscodeTest2OpenedIcon],svg[vscode-icons-folder-type-vscode-test2-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d32626" d="M27.4 5.5h-9.2l-2.1 4.2H4.3v16.8h25.2v-21Zm0 18.7H6.6V11.8h20.8Zm0-14.5h-8.2l1-2.1h7.1v2.1Z"></svg:path><svg:path fill="#d32626" d="M25.7 13.7H.5l3.8 12.8h25.2z"></svg:path><svg:path fill="#007acc" d="m17.187 22.516l-5.167 3.892l-2.131-.708l5.255-5.2l-5.255-5.2l2.13-.711l5.167 3.892L25.77 10l5.14 2.183v16.633L25.77 31Zm2.678-2.016l5.9 4.447v-8.894Z"></svg:path>`,
})
export class VscodeIconsFolderTypeVscodeTest2OpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
