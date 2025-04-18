import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCarouselOutlineIcon],svg[material-symbols-view-carousel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15V9q0-.825.588-1.412T4 7t1.413.588T6 9v6q0 .825-.587 1.413T4 17t-1.412-.587T2 15m7 4q-.825 0-1.412-.587T7 17V7q0-.825.588-1.412T9 5h6q.825 0 1.413.588T17 7v10q0 .825-.587 1.413T15 19zm9-4V9q0-.825.588-1.412T20 7t1.413.588T22 9v6q0 .825-.587 1.413T20 17t-1.412-.587T18 15m-9 2h6V7H9zm3-5"></svg:path>`,
})
export class MaterialSymbolsViewCarouselOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
