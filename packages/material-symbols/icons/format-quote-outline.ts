import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatQuoteOutlineIcon],svg[material-symbols-format-quote-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.7 18L8 14q-1.65 0-2.825-1.175T4 10t1.175-2.825T8 6t2.825 1.175T12 10q0 .575-.137 1.063T11.45 12L8 18zm9 0l2.3-4q-1.65 0-2.825-1.175T13 10t1.175-2.825T17 6t2.825 1.175T21 10q0 .575-.137 1.063T20.45 12L17 18zM8 11.5q.625 0 1.063-.437T9.5 10t-.437-1.062T8 8.5t-1.062.438T6.5 10t.438 1.063T8 11.5m9 0q.625 0 1.063-.437T18.5 10t-.437-1.062T17 8.5t-1.062.438T15.5 10t.438 1.063T17 11.5M8 10"></svg:path>`,
})
export class MaterialSymbolsFormatQuoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
