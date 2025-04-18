import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMaterialCalculatorIcon],svg[arcticons-material-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="33.25" cy="33.25" r="11.07" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24H5.5m0 0H24V5.5m12.33 6.59l-6.16 6.15m0-6.15l6.16 6.15M14.37 37.6v-8.7m4.35 4.35h-8.71m27.59-1.14h-8.7m8.7 2.81h-8.7M18.7 15.15H10"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 27.169V9.5a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h17.67M24 24v3.17M27.168 24H24m15.33 0h3.17"></svg:path>`,
})
export class ArcticonsMaterialCalculatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
