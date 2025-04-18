import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilterAltOutlineSharpIcon],svg[material-symbols-light-filter-alt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-6.346L4.95 5h14.1L13 12.654V19zm1-6.7L16.95 6h-9.9zm0 0"></svg:path>`,
})
export class MaterialSymbolsLightFilterAltOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
