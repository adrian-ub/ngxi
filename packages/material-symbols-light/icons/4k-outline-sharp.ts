import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight4kOutlineSharpIcon],svg[material-symbols-light-4k-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.885 14.692h.884v-2.365l2.289 2.365h1.229l-2.652-2.73l2.652-2.654h-1.19l-2.328 2.327V9.308h-.884zm-3.231 0h.885v-1.5h1.23v-.884h-1.23v-3h-.885v3H7.769v-3h-.884v3.884h2.769zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLight4kOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
