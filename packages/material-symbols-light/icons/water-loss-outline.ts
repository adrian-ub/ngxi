import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWaterLossOutlineIcon],svg[material-symbols-light-water-loss-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.062 15.5q-1.214 0-2.355.268t-2.186.8l.344 2.894q.039.23.202.384q.164.154.414.154h9.058q.25 0 .413-.154t.202-.384l.325-2.962q-.881 0-1.656-.14t-2.1-.516q-.633-.194-1.306-.269t-1.356-.075m-4.65.039q1.125-.52 2.291-.78q1.165-.259 2.385-.259q.73 0 1.458.09t1.434.29q1.327.37 2.018.495q.692.125 1.5.125h.091L18.866 4H5.116zM7.475 21q-.64 0-1.097-.404t-.513-1.025L4 3h16l-1.846 16.571q-.056.621-.513 1.025q-.456.404-1.097.404zm3.587-1h6.092H6.866z"></svg:path>`,
})
export class MaterialSymbolsLightWaterLossOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
