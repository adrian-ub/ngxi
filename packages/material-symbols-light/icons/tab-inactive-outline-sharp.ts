import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabInactiveOutlineSharpIcon],svg[material-symbols-light-tab-inactive-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.77 21v-3.77H3v-3.307h1v2.308h2.77V6.769h9.46V4h-2.307V3h3.308v3.77H21V21zm1-1H20V7.77H7.77zm0 0V7.77zM3 11.539V8.692h1v2.846zm0-5.231V3h3.308v1H4v2.308zM8.692 4V3h2.846v1z"></svg:path>`,
})
export class MaterialSymbolsLightTabInactiveOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
