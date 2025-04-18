import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCakeAddIcon],svg[material-symbols-cake-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22q-.425 0-.712-.288T2 21v-4q0-.825.588-1.412T4 15h14q.825 0 1.413.588T20 17v4q0 .425-.288.713T19 22zm1-9v-3q0-.825.588-1.412T6 8h4V6.55q-.45-.3-.725-.725T9 4.8q0-.375.15-.738T9.6 3.4L11 2l1.4 1.4q.3.3.45.662T13 4.8q0 .6-.275 1.025T12 6.55V8h4q.825 0 1.413.587T18 10v3zm15-5V6h-2V4h2V2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsCakeAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
