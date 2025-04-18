import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLivingOutlineSharpIcon],svg[material-symbols-light-living-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm1-1h16V4H4zm1.616-2.616h12.769V10.35h-1.25V7H6.865v3.35h-1.25zM6.5 16.5v-5.384h2v3h7v-3h2V16.5zm2.885-3.27v-2.95H7.75V7.886h8.5v2.396h-1.634v2.95zM4 20V4z"></svg:path>`,
})
export class MaterialSymbolsLightLivingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
