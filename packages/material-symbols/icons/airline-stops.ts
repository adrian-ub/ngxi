import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineStopsIcon],svg[material-symbols-airline-stops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19v-2h2q-.375-3.45-2.95-5.725T2 9V7q3.225 0 5.925 1.7T12 13.3q.95-2.025 2.5-3.588T17.975 7H14V5h7v7h-2V8.7q-2.325 1.425-4 3.525T13 17h2v2z"></svg:path>`,
})
export class MaterialSymbolsAirlineStopsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
