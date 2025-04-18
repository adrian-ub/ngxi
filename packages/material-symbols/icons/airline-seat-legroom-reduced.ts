import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatLegroomReducedIcon],svg[material-symbols-airline-seat-legroom-reduced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21v-3l1-4H8q-.825 0-1.412-.587T6 12V3h6v6h5q.825 0 1.413.588T19 11l-2 7h1.45q.675 0 1.113.413T20 19.5t-.413 1.088T18.5 21zm-2-4H5q-.825 0-1.412-.587T3 15V3h2v12h7z"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatLegroomReducedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
