import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewRealSizeRoundedIcon],svg[material-symbols-view-real-size-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17q-.425 0-.712-.288T7 16V9H6q-.425 0-.712-.288T5 8t.288-.712T6 7h1.5q.625 0 1.063.438T9 8.5V16q0 .425-.288.713T8 17m9 0q-.425 0-.712-.288T16 16V9h-1q-.425 0-.712-.288T14 8t.288-.712T15 7h1.5q.625 0 1.063.438T18 8.5V16q0 .425-.288.713T17 17m-5-4q-.425 0-.712-.288T11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13m0 4q-.425 0-.712-.288T11 16t.288-.712T12 15t.713.288T13 16t-.288.713T12 17"></svg:path>`,
})
export class MaterialSymbolsViewRealSizeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
