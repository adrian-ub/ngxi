import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatReclineExtraSharpIcon],svg[material-symbols-airline-seat-recline-extra-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6q-.825 0-1.412-.587T6.5 4t.588-1.412T8.5 2t1.413.588T10.5 4t-.587 1.413T8.5 6M5.575 20L3 7h2.05l2.2 11H14v2zM19.5 22l-2.9-5H8.025L6.6 10.05q-.275-1.2.563-2.125T9.2 7q.875 0 1.588.525T11.7 8.95L12.8 14h4.375l4.075 7z"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatReclineExtraSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
