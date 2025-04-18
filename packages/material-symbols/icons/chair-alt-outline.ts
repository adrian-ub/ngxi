import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChairAltOutlineIcon],svg[material-symbols-chair-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21v-7q0-.825.588-1.412T7 12h1v-2H7q-.825 0-1.412-.587T5 8V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v3q0 .825-.587 1.413T17 10h-1v2h1q.825 0 1.413.588T19 14v7h-2v-3H7v3zM7 8h10V5H7zm3 4h4v-2h-4zm-3 4h10v-2H7zm0-8V5zm0 8v-2z"></svg:path>`,
})
export class MaterialSymbolsChairAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
