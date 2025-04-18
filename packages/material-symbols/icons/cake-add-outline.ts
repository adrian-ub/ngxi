import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCakeAddOutlineIcon],svg[material-symbols-cake-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8V6h-2V4h2V2h2v2h2v2h-2v2zM3 22q-.425 0-.712-.288T2 21v-5q0-.825.588-1.412T4 14v-4q0-.825.588-1.412T6 8h4V6.55q-.45-.3-.725-.725T9 4.8q0-.375.15-.738T9.6 3.4L11 2l1.4 1.4q.3.3.45.662T13 4.8q0 .6-.275 1.025T12 6.55V8h4q.825 0 1.413.587T18 10v4q.825 0 1.413.588T20 16v5q0 .425-.288.713T19 22zm3-8h10v-4H6zm-2 6h14v-4H4zm2-6h10zm-2 6h14zm14-6H4z"></svg:path>`,
})
export class MaterialSymbolsCakeAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
