import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventListIcon],svg[material-symbols-event-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21q-.825 0-1.412-.587T14 19v-4q0-.825.588-1.412T16 13h4q.825 0 1.413.588T22 15v4q0 .825-.587 1.413T20 21zM2 18v-2h9v2zm14-7q-.825 0-1.412-.587T14 9V5q0-.825.588-1.412T16 3h4q.825 0 1.413.588T22 5v4q0 .825-.587 1.413T20 11zM2 8V6h9v2z"></svg:path>`,
})
export class MaterialSymbolsEventListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
