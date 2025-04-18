import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineStopsRoundedIcon],svg[material-symbols-airline-stops-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17q-.35-3.175-2.562-5.363T3.1 9.076q-.45-.05-.775-.35T2 8t.3-.712t.725-.238q2.925.275 5.313 1.925T12 13.3q.95-2.025 2.5-3.588T17.975 7H15q-.425 0-.712-.288T14 6t.288-.712T15 5h5q.425 0 .713.288T21 6v5q0 .425-.288.713T20 12t-.712-.288T19 11V8.7q-2.325 1.425-4 3.525T13 17h1q.425 0 .713.288T15 18t-.288.713T14 19h-4q-.425 0-.712-.288T9 18t.288-.712T10 17z"></svg:path>`,
})
export class MaterialSymbolsAirlineStopsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
