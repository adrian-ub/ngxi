import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeFsharpIcon],svg[vscode-icons-file-type-fsharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#378bba" d="M2 16L15.288 2.712v6.644L8.644 16l6.644 6.644v6.644Z"></svg:path><svg:path fill="#378bba" d="m10.542 16l4.746-4.746v9.492Z"></svg:path><svg:path fill="#30b9db" d="M30 16L16.237 2.712v6.644L22.881 16l-6.644 6.644v6.644Z"></svg:path>`,
})
export class VscodeIconsFileTypeFsharpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
