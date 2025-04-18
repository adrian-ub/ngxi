import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabMoveRoundedIcon],svg[material-symbols-tab-move-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-2q0-.425.288-.712T4 16t.713.288T5 17v2h14V7H5v2q0 .425-.288.713T4 10t-.712-.288T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7.175-7H4q-.425 0-.712-.288T3 13t.288-.712T4 12h8.175L10.8 10.6q-.275-.275-.288-.687T10.8 9.2q.275-.275.7-.275t.7.275l3.1 3.1q.3.3.3.7t-.3.7l-3.1 3.1q-.275.275-.687.288T10.8 16.8q-.275-.275-.275-.7t.275-.7z"></svg:path>`,
})
export class MaterialSymbolsTabMoveRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
