import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDataTableRoundedIcon],svg[material-symbols-data-table-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8h18V5.5q0-.625-.437-1.062T19.5 4h-15q-.625 0-1.062.438T3 5.5zm0 6h18v-4H3zm1.5 6h15q.625 0 1.063-.437T21 18.5V16H3v2.5q0 .625.438 1.063T4.5 20M5 7q-.425 0-.712-.288T4 6t.288-.712T5 5t.713.288T6 6t-.288.713T5 7m0 6q-.425 0-.712-.288T4 12t.288-.712T5 11t.713.288T6 12t-.288.713T5 13m0 6q-.425 0-.712-.288T4 18t.288-.712T5 17t.713.288T6 18t-.288.713T5 19"></svg:path>`,
})
export class MaterialSymbolsDataTableRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
