import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorBrokenIcon],svg[solar-calculator-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 12c0 4.714 0 7.071-1.318 8.535S16.242 22 12 22s-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464c.876.974 1.17 2.343 1.268 4.536"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M7 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8Z"></svg:path><svg:circle cx="8" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="17" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarCalculatorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
