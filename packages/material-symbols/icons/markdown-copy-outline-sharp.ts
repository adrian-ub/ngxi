import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkdownCopyOutlineSharpIcon],svg[material-symbols-markdown-copy-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18V2h13v16zm2-2h9V4H9zm-6 6V6h2v14h11v2zm7.25-9h1.5V8.5h1v3h1.5v-3h1V13h1.5V7h-6.5zM9 16V4z"></svg:path>`,
})
export class MaterialSymbolsMarkdownCopyOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
