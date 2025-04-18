import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeCircleciOpenedIcon],svg[vscode-icons-folder-type-circleci-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7bc2db" d="M27.4 5.5h-9.2l-2.1 4.2H4.3v16.8h25.2v-21Zm0 18.7H6.6V11.8h20.8Zm0-14.5h-8.2l1-2.1h7.1v2.1Z"></svg:path><svg:path fill="#7bc2db" d="M25.7 13.7H.5l3.8 12.8h25.2z"></svg:path><svg:path fill="#064c64" d="M17.944 20.5a2.5 2.5 0 1 1 2.5 2.5a2.5 2.5 0 0 1-2.5-2.5m2.5-10.5a10.51 10.51 0 0 0-10.173 7.9a.3.3 0 0 0-.01.1a.5.5 0 0 0 .5.5h4.231a.48.48 0 0 0 .45-.294a5.5 5.5 0 1 1 0 4.574a.51.51 0 0 0-.45-.294h-4.229a.5.5 0 0 0-.5.5c0 .031.01.063.01.1A10.5 10.5 0 1 0 20.443 10Z"></svg:path>`,
})
export class VscodeIconsFolderTypeCircleciOpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
