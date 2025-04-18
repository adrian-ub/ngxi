import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightPurescriptIcon],svg[vscode-icons-file-type-light-purescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="m21.892 22.136l-2.186-2.041h-9.599l2.186 2.041zm-9.599-7.156l-2.186 2.041h9.599l2.186-2.041zm9.598-3.074l-2.185-2.042h-9.599l2.186 2.042zM9.1 13.926l-1.448-1.444L2.3 17.836a1.023 1.023 0 0 0 0 1.443l5.354 5.354L9.1 23.19l-4.636-4.632Zm20.6-1.205l-5.352-5.355L22.9 8.81l4.63 4.632l-4.63 4.633l1.443 1.443l5.357-5.353a1.02 1.02 0 0 0 0-1.444"></svg:path>`,
})
export class VscodeIconsFileTypeLightPurescriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
