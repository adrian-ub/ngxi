import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineCurveRoundedIcon],svg[material-symbols-line-curve-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20q-.425 0-.712-.325t-.338-.775q-.2-2.575-1.263-4.825t-2.775-3.962T9.95 7.325T5.15 6.05q-.45-.05-.8-.337T4 5t.313-.712t.737-.263q3 .2 5.638 1.438T15.325 8.7t3.238 4.65T19.975 19q.025.425-.262.713T19 20"></svg:path>`,
})
export class MaterialSymbolsLineCurveRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
