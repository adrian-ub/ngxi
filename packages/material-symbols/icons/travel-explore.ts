import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTravelExploreIcon],svg[material-symbols-travel-explore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q3.65 0 6.388 2.288t3.412 5.737h-2.05q-.475-1.825-1.713-3.262T15 4.6V5q0 .825-.587 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h2v3H9l-4.8-4.8q-.075.45-.137.9T4 12q0 3.275 2.3 5.625T12 20zm9.1-.5l-3.2-3.2q-.525.3-1.125.5T15.5 19q-1.875 0-3.187-1.312T11 14.5t1.313-3.187T15.5 10t3.188 1.313T20 14.5q0 .675-.2 1.275t-.5 1.125l3.2 3.2zM15.5 17q1.05 0 1.775-.725T18 14.5t-.725-1.775T15.5 12t-1.775.725T13 14.5t.725 1.775T15.5 17"></svg:path>`,
})
export class MaterialSymbolsTravelExploreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
