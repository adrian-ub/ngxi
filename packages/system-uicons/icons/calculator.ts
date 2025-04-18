import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalculatorIcon],svg[system-uicons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 4.5h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2m-2 5h10"></svg:path><svg:g fill="currentColor" transform="translate(5 4)"><svg:circle cx="2.5" cy="7.5" r="1"></svg:circle><svg:circle cx="4.5" cy="7.5" r="1"></svg:circle><svg:circle cx="6.5" cy="7.5" r="1"></svg:circle><svg:circle cx="8.5" cy="7.5" r="1"></svg:circle><svg:circle cx="2.5" cy="9.5" r="1"></svg:circle><svg:circle cx="4.5" cy="9.5" r="1"></svg:circle><svg:circle cx="6.5" cy="9.5" r="1"></svg:circle><svg:circle cx="8.5" cy="9.5" r="1"></svg:circle><svg:circle cx="2.5" cy="11.5" r="1"></svg:circle><svg:circle cx="4.5" cy="11.5" r="1"></svg:circle><svg:circle cx="6.5" cy="11.5" r="1"></svg:circle><svg:circle cx="8.5" cy="11.5" r="1"></svg:circle></svg:g></svg:g>`,
})
export class SystemUiconsCalculatorIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
