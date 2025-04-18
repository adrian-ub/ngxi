import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeMvtIcon],svg[vscode-icons-file-type-mvt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><svg:path fill="none" d="M0 0h32v32H0z"></svg:path><svg:path fill="#f7394a" d="M4 4h24v24H4z"></svg:path><svg:path fill="#fff" fill-rule="nonzero" d="m21.765 13.008l-4.181 5.825a1.95 1.95 0 0 1-1.613.835q-.483 0-.904-.221a2.05 2.05 0 0 1-.708-.614l-4.205-5.825v9.13H8V9.862h1.002q.784 0 1.498.368c.714.368.871.586 1.186 1.02l4.32 6.022l4.285-6.009q.46-.664 1.181-1.033c.721-.369.984-.368 1.514-.368H24v12.276h-2.235z"></svg:path></svg:g>`,
})
export class VscodeIconsFileTypeMvtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
