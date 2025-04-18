import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeMermaidIcon],svg[vscode-icons-file-type-mermaid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fd366e" d="M29.973 4.478A14.24 14.24 0 0 0 16 13.842c-2.107-5.82-7.787-9.628-13.973-9.364a14.25 14.25 0 0 0 6.2 12.36a7.65 7.65 0 0 1 3.316 6.32v4.376h8.916V23.16a7.65 7.65 0 0 1 3.315-6.32a14.25 14.25 0 0 0 6.2-12.36z"></svg:path>`,
})
export class VscodeIconsFileTypeMermaidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
