import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryPlusOutlineRoundedIcon],svg[material-symbols-light-battery-plus-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.385 18.385h-2.116q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.144h2.115V15.27q0-.212.144-.356t.357-.144t.356.144t.144.356v2.115H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.144h-2.116V20.5q0 .213-.143.356q-.144.144-.357.144t-.356-.144t-.144-.356zM8.692 21q-.343 0-.575-.232t-.233-.576V5.288q0-.343.233-.575t.575-.232h1.616v-.673q0-.344.232-.576T11.116 3h1.769q.343 0 .575.232t.232.576v.673h1.62q.344 0 .574.232t.23.575v6.27q0 .212-.144.356t-.357.144t-.356-.144t-.143-.356V5.462H8.885V20h2.582q.213 0 .357.144t.143.357t-.143.356t-.357.143z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryPlusOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
