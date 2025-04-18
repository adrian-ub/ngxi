import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCalculatorOneIcon],svg[icon-park-outline-calculator-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 11h20v9H14z"></svg:path><svg:circle cx="17" cy="26" r="2" fill="currentColor"></svg:circle><svg:circle cx="17" cy="32" r="2" fill="currentColor"></svg:circle><svg:circle cx="17" cy="38" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="26" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="32" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="38" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="26" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="32" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="38" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineCalculatorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
