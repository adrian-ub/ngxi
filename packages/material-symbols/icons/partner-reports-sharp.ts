import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPartnerReportsSharpIcon],svg[material-symbols-partner-reports-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13V3h2v10zm-8 8v-5h2v3h14v-3h2v5zm8-4v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsPartnerReportsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
