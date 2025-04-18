import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWaterBottleLargeOutlineSharpIcon],svg[material-symbols-light-water-bottle-large-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.885 20.116h10.23v-2.808h-2v-6.616H13.5v-1h3.616V6.885H6.885v2.807h2v6.616H10.5v1H6.885zm-1 1v-4.808h2v-5.616h-2V5.885h4.807V4.5h-1v-1h4.616v1h-1v1.385h4.808v4.807h-2v5.616h2v4.808zM12 13.5"></svg:path>`,
})
export class MaterialSymbolsLightWaterBottleLargeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
