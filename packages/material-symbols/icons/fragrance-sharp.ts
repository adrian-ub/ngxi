import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFragranceSharpIcon],svg[material-symbols-fragrance-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8q-.425 0-.712-.288T13 7t.288-.712T14 6t.713.288T15 7t-.288.713T14 8m6 0q-.425 0-.712-.288T19 7t.288-.712T20 6t.713.288T21 7t-.288.713T20 8m-3-2q-.425 0-.712-.288T16 5t.288-.712T17 4t.713.288T18 5t-.288.713T17 6m3-2q-.425 0-.712-.288T19 3t.288-.712T20 2t.713.288T21 3t-.288.713T20 4m-3 6q-.425 0-.712-.288T16 9t.288-.712T17 8t.713.288T18 9t-.288.713T17 10m3 2q-.425 0-.712-.288T19 11t.288-.712T20 10t.713.288T21 11t-.288.713T20 12M3 21V10h10v11zM5 8.5v-4L6.5 3H11v5.5z"></svg:path>`,
})
export class MaterialSymbolsFragranceSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
