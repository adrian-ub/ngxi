import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeAvifIcon],svg[vscode-icons-file-type-avif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbac30" d="M29.913 20.149L23.481 9.03l-6.414 11.119Z"></svg:path><svg:path fill="#12b17d" d="m29.913 20.149l-2.408-2.775h-8.022l-2.416 2.775Z"></svg:path><svg:path fill="#bb255c" d="m23.481 24.33l4.024-6.956h-8.022Z"></svg:path><svg:path d="M8.309 19.138H5.258l-.3 1.02H2.345l2.923-7.939H8.3l2.922 7.939h-2.6Zm-2.435-2h1.82l-.91-2.794Zm3.768-4.916h2.729l1.709 5.339l1.709-5.339h2.729L15.6 20.158h-3.036l-2.922-7.939"></svg:path><svg:path fill="#f1f4d4" d="m23.03 14.213l-.827.827l-.891-.938l1.93-1.883h1.35v4.769H23.03Z"></svg:path>`,
})
export class VscodeIconsFileTypeAvifIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
