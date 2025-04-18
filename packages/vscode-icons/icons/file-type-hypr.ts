import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeHyprIcon],svg[vscode-icons-file-type-hypr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#656868" d="M2 29.99h27.91L8.7 8.52l-4.48 8.53z"></svg:path><svg:path fill="#2b2b2b" d="m2 30l17.34-10.72l-3.3-3.34z"></svg:path><svg:path fill="#ffce01" d="M2 13.18L13.19 2H30L2 29.99z"></svg:path>`,
})
export class VscodeIconsFileTypeHyprIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
