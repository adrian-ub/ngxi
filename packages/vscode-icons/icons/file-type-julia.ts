import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeJuliaIcon],svg[vscode-icons-file-type-julia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8.309" cy="22.592" r="5.86" fill="#d5635c"></svg:circle><svg:path fill="#cb3c33" d="M8.309 28.9a6.309 6.309 0 1 1 6.309-6.309A6.316 6.316 0 0 1 8.309 28.9m0-11.719a5.41 5.41 0 1 0 5.41 5.41a5.416 5.416 0 0 0-5.41-5.409Z"></svg:path><svg:circle cx="16" cy="9.408" r="5.86" fill="#60ad51"></svg:circle><svg:path fill="#389826" d="M16 15.717a6.309 6.309 0 1 1 6.309-6.309A6.316 6.316 0 0 1 16 15.717M16 4a5.41 5.41 0 1 0 5.41 5.41A5.416 5.416 0 0 0 16 4"></svg:path><svg:circle cx="23.691" cy="22.592" r="5.86" fill="#aa79c1"></svg:circle><svg:path fill="#9558b2" d="M23.691 28.9A6.309 6.309 0 1 1 30 22.592a6.316 6.316 0 0 1-6.309 6.308m0-11.719a5.41 5.41 0 1 0 5.41 5.41a5.416 5.416 0 0 0-5.41-5.409Z"></svg:path>`,
})
export class VscodeIconsFileTypeJuliaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
