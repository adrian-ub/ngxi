import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOdtOutlineSharpIcon],svg[material-symbols-light-odt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.308 14.692h3.384V9.308H5.308zm.884-.884v-3.616h1.616v3.616zm4.116.884h2.788l.596-.615V9.904l-.596-.596h-2.788zm.884-.884v-3.616h1.616v3.616zm5.174.884h.884v-4.5h1.25v-.884h-3.384v.884h1.25zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightOdtOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
