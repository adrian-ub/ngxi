import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLivingSharpIcon],svg[material-symbols-light-living-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2.616-3.616h12.769V10.35h-1.25V7H6.865v3.35h-1.25zM6.5 16.5v-5.384h2v3h7v-3h2V16.5zm2.885-3.27v-2.95H7.75V7.886h8.5v2.396h-1.634v2.95z"></svg:path>`,
})
export class MaterialSymbolsLightLivingSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
