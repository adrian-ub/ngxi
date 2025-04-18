import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatLegroomExtraIcon],svg[material-symbols-airline-seat-legroom-extra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17H4q-.825 0-1.412-.587T2 15V3h2v12h9zm5.4 4L15 14H8.5q-1.25 0-2.125-.875T5.5 11V3h6v6h3q.575 0 1.05.313t.75.837l3.4 6.95l1.1-.5q.575-.275 1.163-.088t.887.738q.3.575.088 1.175t-.788.875z"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatLegroomExtraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
