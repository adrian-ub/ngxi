import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlightLandIcon],svg[material-symbols-flight-land-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2h18v2zm15.55-5.05L3 11.525V4.25l2.4.675L6.6 8.4l3.45.975L9.175.8l2.875.85l3.2 9.225l4.3 1.225q.625.2 1.038.725t.412 1.2q0 .875-.712 1.537t-1.738.388"></svg:path>`,
})
export class MaterialSymbolsFlightLandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
