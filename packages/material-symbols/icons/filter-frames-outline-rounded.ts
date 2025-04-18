import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterFramesOutlineRoundedIcon],svg[material-symbols-filter-frames-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20V6q0-.825.588-1.412T4 4h4L11.3.7q.3-.3.7-.3t.7.3L16 4h4q.825 0 1.413.588T22 6v14q0 .825-.587 1.413T20 22zm0-2h16V6H4zm2-3V9q0-.425.288-.712T7 8h10q.425 0 .713.288T18 9v8q0 .425-.288.713T17 18H7q-.425 0-.712-.288T6 17m2-1h8v-6H8zm4-3"></svg:path>`,
})
export class MaterialSymbolsFilterFramesOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
