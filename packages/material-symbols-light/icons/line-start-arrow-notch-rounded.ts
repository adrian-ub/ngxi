import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineStartArrowNotchRoundedIcon],svg[material-symbols-light-line-start-arrow-notch-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.402 12.5l1.636 2.942q.143.293-.075.497t-.49.044l-5.187-3.306q-.378-.242-.378-.677t.378-.677l5.187-3.306q.273-.161.49.044t.076.497L9.402 11.5H21q.214 0 .357.143T21.5 12t-.143.357T21 12.5z"></svg:path>`,
})
export class MaterialSymbolsLightLineStartArrowNotchRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
