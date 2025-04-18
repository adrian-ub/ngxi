import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMoveSelectionRightRoundedIcon],svg[material-symbols-move-selection-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18q-.825 0-1.412-.587T10 16V8q0-.825.588-1.412T12 6h8q.825 0 1.413.588T22 8v8q0 .825-.587 1.413T20 18zM7 8q-.425 0-.712-.288T6 7t.288-.712T7 6t.713.288T8 7t-.288.713T7 8M3 8q-.425 0-.712-.288T2 7t.288-.712T3 6t.713.288T4 7t-.288.713T3 8m0 5q-.425 0-.712-.288T2 12t.288-.712T3 11t.713.288T4 12t-.288.713T3 13m0 5q-.425 0-.712-.288T2 17t.288-.712T3 16t.713.288T4 17t-.288.713T3 18m4 0q-.425 0-.712-.288T6 17t.288-.712T7 16t.713.288T8 17t-.288.713T7 18"></svg:path>`,
})
export class MaterialSymbolsMoveSelectionRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
