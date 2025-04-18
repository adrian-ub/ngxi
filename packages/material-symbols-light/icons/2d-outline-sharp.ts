import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight2dOutlineSharpIcon],svg[material-symbols-light-2d-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.885 14.692h3.884v-.884h-3v-1.423h3V9.308H6.885v.884h3v1.424h-3zM4 20V4h16v16zm1-1h14V5H5zm0 0V5zm7.846-4.308h3.789l.596-.615V9.904l-.597-.596h-3.788zm.885-.884v-3.616h2.615v3.616z"></svg:path>`,
})
export class MaterialSymbolsLight2dOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
