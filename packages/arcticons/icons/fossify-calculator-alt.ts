import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFossifyCalculatorAltIcon],svg[arcticons-fossify-calculator-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.601 33.101h10m-10-3h10m-9.3-18.002l8.6 8.6m0-8.6l-8.6 8.6m-14.902-4.3h8m-8 15.202h8m-4-4v8"></svg:path>`,
})
export class ArcticonsFossifyCalculatorAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
