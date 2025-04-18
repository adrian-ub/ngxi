import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCommentBankOutlineSharpIcon],svg[material-symbols-comment-bank-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 11V4H4v13.125L5.15 16H20V4h-2.5v7L15 9.5zM2 22V2h20v16H6zM4 4v12z"></svg:path>`,
})
export class MaterialSymbolsCommentBankOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
