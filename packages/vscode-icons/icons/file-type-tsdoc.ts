import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeTsdocIcon],svg[vscode-icons-file-type-tsdoc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width=".28" d="M3.865 3.873h3.027V6.9H3.865z"></svg:path><svg:path fill="#108938" d="M7.68.53H.786A.257.257 0 0 0 .53.785V7.68a.257.257 0 0 0 .257.258H7.68a.257.257 0 0 0 .258-.258V.786A.257.257 0 0 0 7.68.53m-.669 5.345l-.378.652l-.954-.675l.11 1.16h-.792l.106-1.16l-.95.675l-.383-.652l1.064-.484l-1.064-.484l.383-.653l.95.675l-.106-1.159h.791l-.11 1.16l.955-.676l.378.653l-1.06.484z" class="a"></svg:path>`,
})
export class VscodeIconsFileTypeTsdocIcon {
  readonly viewBox = input("0 0 8.467 8.467")
  readonly width = input("1em")
  readonly height = input("1em")
}
