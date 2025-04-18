import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnCalculatorIcon],svg[typcn-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21H9c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3M9 5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1z"></svg:path><svg:circle cx="10" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="13" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="13" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="13" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="17" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 7v1h-6V7zm1-1H9v3h8z"></svg:path>`,
})
export class TypcnCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
