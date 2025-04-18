import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeStackblitzIcon],svg[vscode-icons-file-type-stackblitz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="M6.3 18.8h8.2L9.9 30l15.8-16.8h-8.2L22.1 2z"></svg:path>`,
})
export class VscodeIconsFileTypeStackblitzIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
