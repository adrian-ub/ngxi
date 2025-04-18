import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCurrencyYuanRoundedIcon],svg[material-symbols-currency-yuan-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20v-6H7q-.425 0-.712-.288T6 13t.288-.712T7 12h3.725l-4.75-7.45q-.325-.5-.037-1.025T6.825 3q.275 0 .5.125t.35.35L12 10.3l4.325-6.825q.125-.225.35-.35t.5-.125q.6 0 .888.525t-.038 1.025L13.275 12H17q.425 0 .713.288T18 13t-.288.713T17 14h-4v6q0 .425-.288.713T12 21t-.712-.288T11 20"></svg:path>`,
})
export class MaterialSymbolsCurrencyYuanRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
