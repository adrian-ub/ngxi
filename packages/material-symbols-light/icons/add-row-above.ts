import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddRowAboveIcon],svg[material-symbols-light-add-row-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21v-7.558h16V21zm0-8.558V5h3.139q-.012.125-.018.244t-.005.256q0 2.027 1.416 3.456T12 10.385t3.468-1.43T16.884 5.5q0-.137-.005-.256T16.86 5H20v7.442zM11.5 8V6h-2V5h2V3h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightAddRowAboveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
