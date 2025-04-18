import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRainyLightSharpIcon],svg[material-symbols-light-rainy-light-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.28 11.683L1.324 5.78l.896-.458l2.958 5.896zm3.5 7L5.33 13.78l.885-.458l2.457 4.896zm2.032-5L5.873 5.78l.89-.458l3.958 7.896zm2.175-5.006l-1.439-2.896l.89-.452l1.439 2.89zm.6 10l-1.458-2.896l.89-.452l1.452 2.865zm4.65 0l-3.958-7.896l.89-.458l3.958 7.871zm1.544-5.994L15.329 5.78l.89-.452l3.458 6.89zm3 6l-1.952-3.902l.89-.452l1.958 3.89z"></svg:path>`,
})
export class MaterialSymbolsLightRainyLightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
