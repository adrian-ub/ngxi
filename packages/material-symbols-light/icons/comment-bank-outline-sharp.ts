import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCommentBankOutlineSharpIcon],svg[material-symbols-light-comment-bank-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.385 10.116V4H4v13.644L5.65 16H20V4h-2.616v6.116l-2-1.193zM3 20.077V3h18v14H6.077zM4 4v13.385z"></svg:path>`,
})
export class MaterialSymbolsLightCommentBankOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
