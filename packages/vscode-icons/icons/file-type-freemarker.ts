import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeFreemarkerIcon],svg[vscode-icons-file-type-freemarker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0050b2" d="m24.023 20.9l1.385 2.1l4.615-7l-4.615-7l-1.385 2.1l3.232 4.9ZM7.977 11.1L6.592 9l-4.615 7l4.615 7l1.385-2.1L4.745 16ZM13.035 9h2.8l-.494 2.8h2.8l.494-2.8h2.8l-.494 2.8h2.8l-.495 2.8h-2.8l-.493 2.8h2.8l-.494 2.8h-2.8l-.492 2.8h-2.8l.493-2.8h-2.8l-.485 2.8h-2.808l.493-2.8h-2.8l.494-2.8h2.8l.493-2.793h-2.8l.494-2.807h2.8Zm1.319 8.4h2.8l.494-2.8h-2.8Z"></svg:path>`,
})
export class VscodeIconsFileTypeFreemarkerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
