import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeHaxeIcon],svg[vscode-icons-file-type-haxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f68712" d="M16 5.5L5.5 16L16 26.5L26.5 16z"></svg:path><svg:path fill="#fab20b" d="m2 2l14 3.5L5.5 16z"></svg:path><svg:path fill="#f47216" d="m30 2l-3.5 14L16 5.5z"></svg:path><svg:path fill="#f25c19" d="m30 30l-14-3.5L26.5 16z"></svg:path><svg:path fill="#f89c0e" d="m2 30l3.5-14L16 26.5z"></svg:path><svg:path fill="#fbc707" d="M16 5.5L2 2h7zm0 0L30 2h-7z"></svg:path><svg:path fill="#f68712" d="M16 26.5L30 30h-7z"></svg:path><svg:path fill="#f25c19" d="M16 26.5L2 30h7z"></svg:path><svg:path fill="#fff200" d="M5.5 16L2 30v-7zm0 0L2 2v7z"></svg:path><svg:path fill="#f1471d" d="M26.5 16L30 2v7zm0 0L30 30v-7z"></svg:path>`,
})
export class VscodeIconsFileTypeHaxeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
