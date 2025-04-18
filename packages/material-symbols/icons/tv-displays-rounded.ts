import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTvDisplaysRoundedIcon],svg[material-symbols-tv-displays-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16q-.425 0-.712-.288T2 15V4q0-.825.588-1.412T4 2h13q.425 0 .713.288T18 3t-.288.713T17 4H4v11q0 .425-.288.713T3 16m9 6q-.425 0-.712-.288T11 21v-1H8q-.825 0-1.412-.587T6 18V8q0-.825.588-1.412T8 6h13q.825 0 1.413.588T23 8v10q0 .825-.587 1.413T21 20h-3v1q0 .425-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsTvDisplaysRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
