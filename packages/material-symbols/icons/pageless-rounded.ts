import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPagelessRoundedIcon],svg[material-symbols-pageless-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22H3q-.825 0-1.412-.587T1 20v-5q0-.425.288-.712T2 14t.713.288T3 15v5h6q.425 0 .713.288T10 21t-.288.713T9 22m6-2h6v-5q0-.425.288-.712T22 14t.713.288T23 15v5q0 .825-.587 1.413T21 22h-6q-.425 0-.712-.288T14 21t.288-.712T15 20M1 9V4q0-.825.588-1.412T3 2h6q.425 0 .713.288T10 3t-.288.713T9 4H3v5q0 .425-.288.713T2 10t-.712-.288T1 9m20 0V4h-6q-.425 0-.712-.288T14 3t.288-.712T15 2h6q.825 0 1.413.588T23 4v5q0 .425-.288.713T22 10t-.712-.288T21 9"></svg:path>`,
})
export class MaterialSymbolsPagelessRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
