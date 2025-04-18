import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeErbIcon],svg[vscode-icons-file-type-erb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#921a1e" d="M7.25 24.75h17.5L12.5 12.5l-5.25 5.25ZM2 30h28V2H16L2 16Zm25.375-2.625H4.625v-10.5l12.25-12.25h10.5Z"></svg:path>`,
})
export class VscodeIconsFileTypeErbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
