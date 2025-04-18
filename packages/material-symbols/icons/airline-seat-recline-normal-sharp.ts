import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatReclineNormalSharpIcon],svg[material-symbols-airline-seat-recline-normal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20V7h2v11h7v2zm5.5-14q-.825 0-1.412-.587T9.5 4t.588-1.412T11.5 2t1.413.588T13.5 4t-.587 1.413T11.5 6M16 22v-5H9V9.5q0-1.05.725-1.775T11.5 7t1.775.725T14 9.5V14h4v8z"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatReclineNormalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
