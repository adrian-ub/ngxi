import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRainyHeavySharpIcon],svg[material-symbols-light-rainy-heavy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.78 18.677L1.324 5.781l.896-.452l6.458 12.885zm4.657 0L5.998 5.781l.896-.458l6.452 12.89zm4.675 0L10.673 5.781l.89-.458l6.439 12.871zm4.669-.006l-6.452-12.89l.89-.458l6.458 12.896z"></svg:path>`,
})
export class MaterialSymbolsLightRainyHeavySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
