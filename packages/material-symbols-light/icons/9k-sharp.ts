import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight9kSharpIcon],svg[material-symbols-light-9k-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.885 14.692h3.884V9.308H6.885v3.077h3v1.423h-3zm.884-3.076v-1.539h2.116v1.539zm5.116 3.076h.884v-2.365l2.289 2.365h1.211l-2.634-2.73l2.634-2.654h-1.173l-2.327 2.327V9.308h-.885zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLight9kSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
