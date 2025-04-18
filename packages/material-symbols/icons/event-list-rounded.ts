import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventListRoundedIcon],svg[material-symbols-event-list-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21q-.825 0-1.412-.587T14 19v-4q0-.825.588-1.412T16 13h4q.825 0 1.413.588T22 15v4q0 .825-.587 1.413T20 21zM3 18q-.425 0-.712-.288T2 17t.288-.712T3 16h7q.425 0 .713.288T11 17t-.288.713T10 18zm13-7q-.825 0-1.412-.587T14 9V5q0-.825.588-1.412T16 3h4q.825 0 1.413.588T22 5v4q0 .825-.587 1.413T20 11zM3 8q-.425 0-.712-.288T2 7t.288-.712T3 6h7q.425 0 .713.288T11 7t-.288.713T10 8z"></svg:path>`,
})
export class MaterialSymbolsEventListRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
