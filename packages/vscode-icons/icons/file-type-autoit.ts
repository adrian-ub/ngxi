import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeAutoitIcon],svg[vscode-icons-file-type-autoit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="12.551" fill="#5d83ac"></svg:circle><svg:path fill="#f0f0f0" d="M2 16a14 14 0 1 1 14 14A14 14 0 0 1 2 16M16 4.789A11.211 11.211 0 1 0 27.211 16A11.21 11.21 0 0 0 16 4.789"></svg:path><svg:path fill="#f0f0f0" d="m24.576 20.156l-6.4-9.264a3.1 3.1 0 0 0-.819-.819a2.36 2.36 0 0 0-2.442.023a3.5 3.5 0 0 0-.812.8l-6.57 9.26h3.752l4.808-6.8l1.838 2.71q.26.368.544.789t.5.7q-.368-.031-.865-.031h-3.53l-1.914 2.634Z"></svg:path>`,
})
export class VscodeIconsFileTypeAutoitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
