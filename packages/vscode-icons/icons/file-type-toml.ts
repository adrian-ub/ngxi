import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeTomlIcon],svg[vscode-icons-file-type-toml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7f7f7f" d="M22.76 6.83v3.25h-5v15.09h-3.5V10.08h-5V6.83Z"></svg:path><svg:path fill="#bfbfbf" d="M2 2h6.2v3.09H5.34v21.8H8.2V30H2Zm28 28h-6.2v-3.09h2.86V5.11H23.8V2H30Z"></svg:path>`,
})
export class VscodeIconsFileTypeTomlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
