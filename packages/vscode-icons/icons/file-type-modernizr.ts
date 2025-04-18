import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeModernizrIcon],svg[vscode-icons-file-type-modernizr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d91b77" d="M2 22.72v-4.48h4.48v-4.48h4.48V9.28h4.48v13.44m1.12-13.44A13.44 13.44 0 0 1 30 22.72H16.56z"></svg:path>`,
})
export class VscodeIconsFileTypeModernizrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
