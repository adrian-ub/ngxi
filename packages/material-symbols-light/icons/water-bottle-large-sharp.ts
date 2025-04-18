import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWaterBottleLargeSharpIcon],svg[material-symbols-light-water-bottle-large-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.885 21.116v-4.808h2v-5.616h-2V5.885h4.807V4.5h-1v-1h4.616v1h-1v1.385h4.808v4.807h-2v5.616h2v4.808z"></svg:path>`,
})
export class MaterialSymbolsLightWaterBottleLargeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
