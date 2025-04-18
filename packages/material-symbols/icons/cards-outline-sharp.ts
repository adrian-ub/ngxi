import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCardsOutlineSharpIcon],svg[material-symbols-cards-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11.5V6h5.5v5.5zM6 18v-5.5h5.5V18zm6.5-6.5V6H18v5.5zm0 6.5v-5.5H18V18zM8 9.5h1.5V8H8zm6.5 0H16V8h-1.5zM8 16h1.5v-1.5H8zm6.5 0H16v-1.5h-1.5zM3 21V3h18v18zm2-2h14V5H5z"></svg:path>`,
})
export class MaterialSymbolsCardsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
