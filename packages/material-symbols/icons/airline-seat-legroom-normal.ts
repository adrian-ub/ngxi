import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatLegroomNormalIcon],svg[material-symbols-airline-seat-legroom-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21v-7H8q-.825 0-1.412-.587T6 12V3h6v6h5q.825 0 1.413.588T19 11v7h1.5q.65 0 1.075.425T22 19.5t-.425 1.075T20.5 21zm-2-4H5q-.825 0-1.412-.587T3 15V3h2v12h9z"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatLegroomNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
