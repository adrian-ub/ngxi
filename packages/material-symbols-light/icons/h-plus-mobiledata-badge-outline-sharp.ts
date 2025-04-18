import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHPlusMobiledataBadgeOutlineSharpIcon],svg[material-symbols-light-h-plus-mobiledata-badge-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.308 16.5h1v-4h4.615v4h1v-9h-1v4H6.308v-4h-1zm10.384-2h1v-2h2v-1h-2v-2h-1v2h-2v1h2zM2 20V4h20v16zm1-1h18V5H3zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightHPlusMobiledataBadgeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
