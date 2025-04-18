import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockpotRoundedIcon],svg[material-symbols-stockpot-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-1.25 0-2.125-.875T3 17V9q0-.425.288-.712T4 8h16q.425 0 .713.288T21 9v8q0 1.25-.875 2.125T18 20zM9 5V4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4v1h5q.425 0 .713.288T21 6t-.288.713T20 7H4q-.425 0-.712-.288T3 6t.288-.712T4 5z"></svg:path>`,
})
export class MaterialSymbolsStockpotRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
