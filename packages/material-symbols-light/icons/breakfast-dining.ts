import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBreakfastDiningIcon],svg[material-symbols-light-breakfast-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-.402 0-.701-.299T5 19V9.873q-.829-.492-1.414-1.212Q3 7.94 3 7q0-1.246.877-2.123T6 4h12q1.246 0 2.123.877T21 7q0 .94-.585 1.66q-.586.72-1.415 1.213V19q0 .402-.299.701T18 20zm5.608-3.57q.165.16.395.16t.39-.16l3.076-3.038q.166-.165.166-.395t-.166-.39l-3.077-3.076q-.16-.165-.389-.165q-.23 0-.395.165l-3.039 3.077q-.16.16-.16.389q0 .23.16.395zM12 15.409L9.592 13L12 10.554L14.446 13z"></svg:path>`,
})
export class MaterialSymbolsLightBreakfastDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
