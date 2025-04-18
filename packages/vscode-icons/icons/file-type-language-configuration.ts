import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLanguageConfigurationIcon],svg[vscode-icons-file-type-language-configuration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M30 4.33v23.34H2V4.33z"></svg:path><svg:path fill="#167abf" d="M2 4.33h8.17v23.34H2zm28 0v23.34H12.5V4.33zM14.83 8.71h9.34V6.96h-9.34zm9.34 14.58h-9.34v1.75h9.34zm3.5-4.08h-9.34v1.75h9.34zm0-4.09h-9.34v1.75h9.34zm0-4.08h-9.34v1.75h9.34z"></svg:path>`,
})
export class VscodeIconsFileTypeLanguageConfigurationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
