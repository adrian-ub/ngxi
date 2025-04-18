import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeJsrIcon],svg[vscode-icons-file-type-jsr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#083344" d="M2 12.77h4.3v-4.3h15.08v2.15H30v8.61h-4.3v4.3H10.61v-2.15H2"></svg:path><svg:path fill="#f7df1e" d="M4.15 14.92h2.16v2.16h2.15v-6.46h2.16v8.61H4.15m8.62-8.61h6.46v2.15h-4.3v2.15h4.3v6.46h-6.46v-2.15h4.3v-2.15h-4.3m8.61-4.31h6.47v4.3h-2.16v-2.15h-2.15v6.46h-2.16"></svg:path>`,
})
export class VscodeIconsFileTypeJsrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
