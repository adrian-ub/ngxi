import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddRowBelowRoundedIcon],svg[material-symbols-add-row-below-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.425 0-.712-.288T11 21v-1h-1q-.425 0-.712-.288T9 19t.288-.712T10 18h1v-1q0-.425.288-.712T12 16t.713.288T13 17v1h1q.425 0 .713.288T15 19t-.288.713T14 20h-1v1q0 .425-.288.713T12 22M3 10V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v6zm2 10q-.825 0-1.412-.587T3 18v-6h18v6q0 .825-.587 1.413T19 20h-1.1q-.4 0-.663-.3T17 19q0-2.075-1.45-3.537T12 14t-3.55 1.463T7 19q0 .4-.25.7t-.65.3z"></svg:path>`,
})
export class MaterialSymbolsAddRowBelowRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
