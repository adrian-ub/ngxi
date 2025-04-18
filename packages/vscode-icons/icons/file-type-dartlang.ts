import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeDartlangIcon],svg[vscode-icons-file-type-dartlang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66c3fa" d="M16.739 2.037a1.3 1.3 0 0 0-.916.377l-.013.01l-8.59 4.965l8.566 8.566v.006l10.3 10.3l1.963-3.536l-7.081-16.997l-3.3-3.3a1.3 1.3 0 0 0-.927-.388Z"></svg:path><svg:path fill="#215896" d="m7.25 7.35l-4.962 8.581l-.01.013a1.32 1.32 0 0 0-.378.919a1.3 1.3 0 0 0 .387.924L6.4 21.9l16.084 6.327l3.636-2.02l-.1-.1h-.025l-10.083-10.1H15.9z"></svg:path><svg:path fill="#235997" d="m7.192 7.362l8.764 8.773h.013l10.087 10.1l3.839-.732l.005-11.363l-4.054-3.973a6.5 6.5 0 0 0-3.624-1.616v-.044z"></svg:path><svg:path fill="#58b6f0" d="m7.256 7.411l8.768 8.768v.013l10.092 10.092l-.734 3.839h-11.36l-3.971-4.056a6.5 6.5 0 0 1-1.614-3.625h-.044z"></svg:path>`,
})
export class VscodeIconsFileTypeDartlangIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
