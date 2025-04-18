import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight10kSharpIcon],svg[material-symbols-light-10k-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.77 14.692h.884V9.308h-2.27v.884H6.77zm2.346 0H13V9.308H9.116zm.884-.884v-3.616h2.116v3.616zm4.462.884h.884v-2.365l2.289 2.365h1.211l-2.634-2.73l2.634-2.654h-1.173l-2.327 2.327V9.308h-.884zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLight10kSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
