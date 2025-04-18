import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRestaurantRoundedIcon],svg[material-symbols-restaurant-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9V3q0-.425.288-.712T8 2t.713.288T9 3v6h1V3q0-.425.288-.712T11 2t.713.288T12 3v6q0 1.4-.862 2.45T9 12.85V21q0 .425-.288.713T8 22t-.712-.288T7 21v-8.15q-1.275-.35-2.137-1.4T4 9V3q0-.425.288-.712T5 2t.713.288T6 3v6zm10 5h-2q-.425 0-.712-.288T14 13V7q0-1.75 1.288-3.375T17.95 2q.45 0 .75.35t.3.825V21q0 .425-.288.713T18 22t-.712-.288T17 21z"></svg:path>`,
})
export class MaterialSymbolsRestaurantRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
