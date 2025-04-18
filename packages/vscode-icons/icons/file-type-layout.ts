import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLayoutIcon],svg[vscode-icons-file-type-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff931e" d="M8.533 12.742h3.733v3.734H8.533zm5.6 0h3.733v3.734h-3.733zm5.6 0h3.733v3.734h-3.733zm-11.2 5.6h3.733v3.734H8.533zm5.6 0h3.733v3.734h-3.733zm5.6 0h3.733v3.734h-3.733z"></svg:path><svg:path fill="#675f58" d="M27.367 4.92H4.632A2.637 2.637 0 0 0 2 7.552v16.9a2.637 2.637 0 0 0 2.632 2.628h22.735A2.637 2.637 0 0 0 30 24.448V7.552a2.64 2.64 0 0 0-2.633-2.632m1.2 19.528a1.207 1.207 0 0 1-1.2 1.2H4.632a1.207 1.207 0 0 1-1.2-1.2V9.24h25.133v15.208Z"></svg:path>`,
})
export class VscodeIconsFileTypeLayoutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
