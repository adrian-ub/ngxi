import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCurrencyFrancRoundedIcon],svg[material-symbols-currency-franc-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20v-2H6q-.425 0-.712-.288T5 17t.288-.712T6 16h1V4q0-.425.288-.712T8 3h9q.425 0 .713.288T18 4t-.288.713T17 5H9v6h7q.425 0 .713.288T17 12t-.288.713T16 13H9v3h3q.425 0 .713.288T13 17t-.288.713T12 18H9v2q0 .425-.288.713T8 21t-.712-.288T7 20"></svg:path>`,
})
export class MaterialSymbolsCurrencyFrancRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
