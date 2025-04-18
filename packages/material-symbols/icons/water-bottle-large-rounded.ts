import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterBottleLargeRoundedIcon],svg[material-symbols-water-bottle-large-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20v-2q0-.825.588-1.412T7 16v-5q-.825 0-1.412-.587T5 9V7q0-.825.588-1.412T7 5h3V4q-.425 0-.712-.288T9 3t.288-.712T10 2h4q.425 0 .713.288T15 3t-.288.713T14 4v1h3q.825 0 1.413.588T19 7v2q0 .825-.587 1.413T17 11v5q.825 0 1.413.588T19 18v2q0 .825-.587 1.413T17 22z"></svg:path>`,
})
export class MaterialSymbolsWaterBottleLargeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
