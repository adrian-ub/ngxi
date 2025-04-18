import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRangeHoodSharpIcon],svg[material-symbols-light-range-hood-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.55 12.885L8 8.423V4h8v4.423l4.462 4.462zM3 19v-5.115h18V19zm7-2.608h4v-.884h-4z"></svg:path>`,
})
export class MaterialSymbolsLightRangeHoodSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
