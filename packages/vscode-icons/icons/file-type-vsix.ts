import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeVsixIcon],svg[vscode-icons-file-type-vsix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#cfcfcf" d="M2 16v14h13v-6H8V8h7V2H2ZM17 5v3h4V6h5v5h-2v4h6V2H17Z"></svg:path><svg:path fill="#cfcfcf" d="M10 16v6h12V10H10Z"></svg:path><svg:path fill="#cfcfcf" d="M24 20.5V24h-7v6h13V17h-6Z"></svg:path>`,
})
export class VscodeIconsFileTypeVsixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
