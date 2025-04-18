import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGarageOutlineSharpIcon],svg[material-symbols-light-garage-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm1-1h16V4H4zm4.616-6.23q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23m6.77 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23M6 11.253V17.5h1v-2h10v2h1v-6.246L16.351 6.5H7.656zm1.304-.754l1.046-3h7.3l1.046 3zM4 4v16zm3 10.5v-3h10v3z"></svg:path>`,
})
export class MaterialSymbolsLightGarageOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
