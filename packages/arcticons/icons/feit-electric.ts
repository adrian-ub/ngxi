import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFeitElectricIcon],svg[arcticons-feit-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.48 7.33l.182 28.301c.074 6.24.046 6.238 4.782 6.31l15.188.045c4.817.002 4.815.003 4.889-5.912V26.22"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.664 22.368L20.765 7.683c2.753-2.265 3.668-2.279 6.7.293l14.87 14.317"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.744 23.775c7.687-7.074 14.225 0 14.225 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.782 25.998a6.744 6.744 0 0 1 10.149-.074m-8.075 2.074a3.828 3.828 0 0 1 6 .074"></svg:path><svg:circle cx="24" cy="30.779" r="1.274" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsFeitElectricIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
