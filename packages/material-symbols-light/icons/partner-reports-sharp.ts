import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPartnerReportsSharpIcon],svg[material-symbols-light-partner-reports-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 12.846V4h1v8.846zM4 20v-4.038h1V19h14v-3.038h1V20zm7.308-3.384V15.23h1.384v1.385z"></svg:path>`,
})
export class MaterialSymbolsLightPartnerReportsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
