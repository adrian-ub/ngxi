import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsP2pIcon],svg[material-symbols-p2p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V4q0-.825.588-1.412T4 2h5q.825 0 1.413.588T11 4v5H9V7H4v8h7v3q0 .825-.587 1.413T9 20zm11 2q-.825 0-1.412-.587T13 20v-5h2v2h5V9h-7V6q0-.825.588-1.412T15 4h5q.825 0 1.413.588T22 6v14q0 .825-.587 1.413T20 22zm-7-9q-.425 0-.712-.288T7 12t.288-.712T8 11t.713.288T9 12t-.288.713T8 13m4 0q-.425 0-.712-.288T11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13m4 0q-.425 0-.712-.288T15 12t.288-.712T16 11t.713.288T17 12t-.288.713T16 13"></svg:path>`,
})
export class MaterialSymbolsP2pIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
