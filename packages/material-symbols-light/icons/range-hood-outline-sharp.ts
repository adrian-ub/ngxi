import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRangeHoodOutlineSharpIcon],svg[material-symbols-light-range-hood-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-5.577l5-5V4h8v4.423l5 5V19zm1.916-6.116h14.169L15 8.8V5H9v3.8zM4 18h16v-4.115H4zm6-1.608v-.884h4v.884z"></svg:path>`,
})
export class MaterialSymbolsLightRangeHoodOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
