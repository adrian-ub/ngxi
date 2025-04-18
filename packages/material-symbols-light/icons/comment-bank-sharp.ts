import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCommentBankSharpIcon],svg[material-symbols-light-comment-bank-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.385 10.116l2-1.193l2 1.193V4h-4zM3 20.077V3h18v14H6.077z"></svg:path>`,
})
export class MaterialSymbolsLightCommentBankSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
