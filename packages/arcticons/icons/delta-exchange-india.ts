import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeltaExchangeIndiaIcon],svg[arcticons-delta-exchange-india-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.064 5.5v37l23.917-12.357v-12.38zm0 24.486l23.917-12.221"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.981 30.144L18.064 17.736l-12.046 6.17l12.046 6.08"></svg:path>`,
})
export class ArcticonsDeltaExchangeIndiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
