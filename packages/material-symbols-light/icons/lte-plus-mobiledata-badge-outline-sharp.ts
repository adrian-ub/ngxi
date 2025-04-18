import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLtePlusMobiledataBadgeOutlineSharpIcon],svg[material-symbols-light-lte-plus-mobiledata-badge-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5zM22 7.73h-1V5H3v14h18v-2.73h1V20H2V4h20zM5.154 15.5h3.192v-1H6.154v-6h-1zm4.885 0h1v-6h1.692v-1H8.346v1h1.693zm3.807 0h3.385v-1h-2.385v-2h1.885v-1h-1.885v-2h2.385v-1h-3.385zm5.827-1.616h.885v-1.442H22v-.884h-1.442v-1.442h-.885v1.442h-1.442v.884h1.442z"></svg:path>`,
})
export class MaterialSymbolsLightLtePlusMobiledataBadgeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
