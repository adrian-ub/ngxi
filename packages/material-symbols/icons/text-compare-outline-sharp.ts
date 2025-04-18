import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextCompareOutlineSharpIcon],svg[material-symbols-text-compare-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 23v-2H3V3h7V1h2v22zm-5-4h5v-2H7v-2h3v-2H7v-2h3V9H7V7h3V5H5zm9-14V3h7v18h-7v-2h5V5zm0 8v-2h3v2zm0-4V7h3v2zm-4 3"></svg:path>`,
})
export class MaterialSymbolsTextCompareOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
