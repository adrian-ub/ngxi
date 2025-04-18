import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBreakfastDiningOutlineSharpIcon],svg[material-symbols-light-breakfast-dining-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20V9.873q-.829-.492-1.414-1.212Q3 7.94 3 7q0-1.246.877-2.123T6 4h12q1.246 0 2.123.877T21 7q0 .94-.585 1.66q-.586.72-1.415 1.213V20zm1-1h12V9.3l.539-.33q.565-.353 1.013-.831Q20 7.659 20 7q0-.825-.587-1.412T18 5H6q-.825 0-1.412.588T4 7q0 .666.445 1.147q.445.482 1.016.834L6 9.3zm6-2.177L15.862 13L12 9.139L8.177 13zm0-1.415L9.592 13L12 10.554L14.446 13zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightBreakfastDiningOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
