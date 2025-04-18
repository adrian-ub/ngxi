import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight5kPlusOutlineSharpIcon],svg[material-symbols-light-5k-plus-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.73 13.885h.77v-1.5H19v-.77h-1.5v-1.5h-.77v1.5h-1.5v.77h1.5zm-5.21.807h.884v-2.365l2.288 2.365h1.23l-2.653-2.73l2.652-2.654h-1.19l-2.327 2.327V9.308h-.885zm-5.135 0h3.769v-3.076H7.269v-1.424h2.885v-.884h-3.77v3.077H9.27v1.423H6.385zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLight5kPlusOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
