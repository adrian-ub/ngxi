import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatQuoteOpenOutlineIcon],svg[mdi-format-quote-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18v-8H9.12l2-4H5.38L3 10.76V18m6-2H5v-4.76L6.62 8h1.26l-2 4H9m12 6v-8h-1.88l2-4h-5.74L13 10.76V18m6-2h-4v-4.76L16.62 8h1.26l-2 4H19Z"></svg:path>`,
})
export class MdiFormatQuoteOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
