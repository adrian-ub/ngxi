import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkdownCopyOutlineSharpIcon],svg[material-symbols-light-markdown-copy-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 17V3h11v14zm1-1h9V4h-9zm-4 4V6.616h1V19h9.385v1zm5.558-7.308h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884V7.308h-5.884zM8.5 16V4z"></svg:path>`,
})
export class MaterialSymbolsLightMarkdownCopyOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
