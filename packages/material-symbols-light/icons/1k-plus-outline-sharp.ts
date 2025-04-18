import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight1kPlusOutlineSharpIcon],svg[material-symbols-light-1k-plus-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.73 13.885h.77v-1.5H19v-.77h-1.5v-1.5h-.77v1.5h-1.5v.77h1.5zm-5.691.807h.884v-2.365l2.288 2.365h1.23l-2.652-2.73l2.652-2.654H14.25l-2.327 2.326V9.308h-.885zm-3.078 0h.885V9.308H6.462v.884h1.5zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLight1kPlusOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
