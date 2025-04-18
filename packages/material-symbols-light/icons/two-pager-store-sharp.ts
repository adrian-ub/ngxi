import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTwoPagerStoreSharpIcon],svg[material-symbols-light-two-pager-store-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21v-2.73h7V21zM3 19V5h18v6.116h-1V6h-7.5v5.289h-1V19zm9.896-1.5l.789-4h7.63l.789 4zm-7.511-2h4.73v-1h-4.73zm0-3h4.73v-1h-4.73zm0-3h4.73v-1h-4.73zm8.5 0v-1h4.73v1z"></svg:path>`,
})
export class MaterialSymbolsLightTwoPagerStoreSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
