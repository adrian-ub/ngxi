import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight50mpOutlineSharpIcon],svg[material-symbols-light-50mp-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.808 11.192h3.884V5.808h-3.884zm.884-.884V6.692h2.116v3.616zm-7.384 7.884h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-5.384H6.308zm7.5 0h.884v-1.5h3v-3.884h-3.884zm.884-2.384v-2.116h2.116v2.116zM4 20V4h16v16zm1-1h14V5H5zM5 5v14zm1.808 6.192h3.884V8.116h-3V6.692h3v-.884H6.808v3.077h3v1.423h-3z"></svg:path>`,
})
export class MaterialSymbolsLight50mpOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
