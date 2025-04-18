import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddCommentSharpIcon],svg[material-symbols-add-comment-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3zm-9 8V2h20v16H6z"></svg:path>`,
})
export class MaterialSymbolsAddCommentSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
