import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeVscodeTest2Icon],svg[vscode-icons-folder-type-vscode-test2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b70b0b" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#007acc" d="m17.187 22.516l-5.167 3.892l-2.131-.708l5.255-5.2l-5.255-5.2l2.13-.711l5.167 3.892L25.77 10l5.14 2.183v16.633L25.77 31Zm2.678-2.016l5.9 4.447v-8.894Z"></svg:path>`,
})
export class VscodeIconsFolderTypeVscodeTest2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
