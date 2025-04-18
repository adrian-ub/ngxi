import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCalculatorIcon],svg[proicons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="14.5" height="18.5" x="4.75" y="2.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="3"></svg:rect><svg:rect width="7.5" height="3.75" x="8.25" y="6.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="1"></svg:rect><svg:circle cx="8.5" cy="13.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="13.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="15.5" cy="13.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="8.5" cy="17.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="15.5" cy="17.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
