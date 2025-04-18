import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVerticalAlignTopRoundedIcon],svg[material-symbols-vertical-align-top-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5q-.425 0-.712-.288T4 4t.288-.712T5 3h14q.425 0 .713.288T20 4t-.288.713T19 5zm7 16q-.425 0-.712-.288T11 20v-9.2l-1.9 1.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l3.6-3.6q.15-.15.325-.212T12 7.425t.375.063t.325.212l3.6 3.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275L13 10.8V20q0 .425-.287.713T12 21"></svg:path>`,
})
export class MaterialSymbolsVerticalAlignTopRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
