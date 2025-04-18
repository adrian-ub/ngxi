import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWaterLossRoundedIcon],svg[material-symbols-light-water-loss-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.412 15.539q1.125-.52 2.29-.78q1.165-.259 2.385-.259q.73 0 1.458.09t1.434.29q1.327.37 2.018.495q.692.125 1.5.125h.091L18.866 4H5.116zM7.475 21q-.64 0-1.097-.404t-.513-1.025L4.14 4.283q-.067-.52.29-.901T5.309 3h13.384q.52 0 .877.382t.29.9l-1.705 15.29q-.056.62-.513 1.024q-.456.404-1.097.404z"></svg:path>`,
})
export class MaterialSymbolsLightWaterLossRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
