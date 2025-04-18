import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanRoundedIcon],svg[material-symbols-lan-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-3q0-.825.588-1.412T5 15h1v-2q0-.825.588-1.412T8 11h3V9h-1q-.825 0-1.412-.587T8 7V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v3q0 .825-.587 1.413T14 9h-1v2h3q.825 0 1.413.588T18 13v2h1q.825 0 1.413.588T21 17v3q0 .825-.587 1.413T19 22h-4q-.825 0-1.412-.587T13 20v-3q0-.825.588-1.412T15 15h1v-2H8v2h1q.825 0 1.413.588T11 17v3q0 .825-.587 1.413T9 22H5q-.825 0-1.412-.587T3 20"></svg:path>`,
})
export class MaterialSymbolsLanRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
