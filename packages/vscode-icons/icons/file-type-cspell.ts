import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeCspellIcon],svg[vscode-icons-file-type-cspell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b4301c" d="M2 20.87h28V27a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z"></svg:path><svg:path d="M2 18.94h28v2H2Z"></svg:path><svg:path d="M10.7 2h2.18v28H10.7Z"></svg:path><svg:path fill="#f6f200" d="M12.88 2H27a3 3 0 0 1 3 3v14H12.88Z"></svg:path><svg:path fill="#d2d2d2" d="M5 2h5.67v17H2V5a3 3 0 0 1 3-3"></svg:path>`,
})
export class VscodeIconsFileTypeCspellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
