import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeKiteIcon],svg[vscode-icons-file-type-kite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#acb1da" d="m16.235 13.059l-4.525 8.516L21.575 30l3.249-12.561z"></svg:path><svg:path fill="#acb1da" d="m12.751 2l-7.81 13.792l5.991 5.113l4.996-8.824l9.158 4.362l1.973-7.629z"></svg:path>`,
})
export class VscodeIconsFileTypeKiteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
