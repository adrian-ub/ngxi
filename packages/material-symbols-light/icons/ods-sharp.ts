import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOdsSharpIcon],svg[material-symbols-light-ods-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.308 14.692h3.384V9.308H5.308zm.884-.884v-3.616h1.616v3.616zm4.116.884h2.788l.596-.615V9.904l-.596-.596h-2.788zm.884-.884v-3.616h1.616v3.616zm4.116.884h3.384v-3.111h-2.5v-1.389h2.5v-.884h-3.384v3.1h2.5v1.4h-2.5zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightOdsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
