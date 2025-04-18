import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightSolidityIcon],svg[vscode-icons-file-type-light-solidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="m20.477 2l-4.5 8h-9l4.5-8z" opacity=".45"></svg:path><svg:path d="M15.975 10h9l-4.5-8h-9Z" opacity=".6"></svg:path><svg:path d="m11.477 18l4.5-8l-4.5-8l-4.5 8Z" opacity=".8"></svg:path><svg:path d="m11.52 30l4.5-8h9l-4.5 8z" opacity=".45"></svg:path><svg:path d="M16.022 22h-9l4.5 8h9Z" opacity=".6"></svg:path><svg:path d="m20.52 14l-4.5 8l4.5 8l4.5-8Z" opacity=".8"></svg:path>`,
})
export class VscodeIconsFileTypeLightSolidityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
