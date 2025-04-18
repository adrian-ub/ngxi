import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMoveSelectionLeftOutlineRoundedIcon],svg[material-symbols-move-selection-left-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18q-.825 0-1.412-.587T2 16V8q0-.825.588-1.412T4 6h8q.825 0 1.413.588T14 8v8q0 .825-.587 1.413T12 18zm8-2V8H4v8zm5 2q-.425 0-.712-.288T16 17t.288-.712T17 16t.713.288T18 17t-.288.713T17 18m4 0q-.425 0-.712-.288T20 17t.288-.712T21 16t.713.288T22 17t-.288.713T21 18m0-5q-.425 0-.712-.288T20 12t.288-.712T21 11t.713.288T22 12t-.288.713T21 13m0-5q-.425 0-.712-.288T20 7t.288-.712T21 6t.713.288T22 7t-.288.713T21 8m-4 0q-.425 0-.712-.288T16 7t.288-.712T17 6t.713.288T18 7t-.288.713T17 8m-9 4"></svg:path>`,
})
export class MaterialSymbolsMoveSelectionLeftOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
