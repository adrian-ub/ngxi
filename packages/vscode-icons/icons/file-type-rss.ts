import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeRssIcon],svg[vscode-icons-file-type-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeRss0" x1="30.06" x2="225.94" y1="30.06" y2="225.94" gradientTransform="matrix(.11 0 0 .11 2 2)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#E3702D"></svg:stop><svg:stop offset=".11" stop-color="#EA7D31"></svg:stop><svg:stop offset=".35" stop-color="#F69537"></svg:stop><svg:stop offset=".5" stop-color="#FB9E3A"></svg:stop><svg:stop offset=".7" stop-color="#EA7C31"></svg:stop><svg:stop offset=".89" stop-color="#DE642B"></svg:stop><svg:stop offset="1" stop-color="#D95B29"></svg:stop></svg:lineargradient></svg:defs><svg:rect width="28" height="28" x="2" y="2" fill="#cc5d15" rx="6.01" ry="6.01"></svg:rect><svg:rect width="26.91" height="26.91" x="2.54" y="2.54" fill="#f49c52" rx="5.47" ry="5.47"></svg:rect><svg:rect width="25.82" height="25.82" x="3.1" y="3.1" fill="url(#vscodeIconsFileTypeRss0)" rx="5.14" ry="5.14"></svg:rect><svg:path fill="#fff" d="M6.82 6.16v3.83a15.31 15.31 0 0 1 15.3 15.3h3.83A19.14 19.14 0 0 0 6.81 6.17zm0 6.45v3.72a8.97 8.97 0 0 1 8.96 8.97h3.72A12.69 12.69 0 0 0 6.81 12.6zm2.62 7.44a2.63 2.63 0 0 0-2.63 2.62a2.63 2.63 0 0 0 2.63 2.63a2.63 2.63 0 0 0 2.63-2.63a2.63 2.63 0 0 0-2.63-2.63z"></svg:path>`,
})
export class VscodeIconsFileTypeRssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
