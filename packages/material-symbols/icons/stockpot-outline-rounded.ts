import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockpotOutlineRoundedIcon],svg[material-symbols-stockpot-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-1.25 0-2.125-.875T3 17V9q0-.425.288-.712T4 8h16q.425 0 .713.288T21 9v8q0 1.25-.875 2.125T18 20zM5 10v7q0 .425.288.713T6 18h12q.425 0 .713-.288T19 17v-7zm4-5V4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4v1h5q.425 0 .713.288T21 6t-.288.713T20 7H4q-.425 0-.712-.288T3 6t.288-.712T4 5zm3 9"></svg:path>`,
})
export class MaterialSymbolsStockpotOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
