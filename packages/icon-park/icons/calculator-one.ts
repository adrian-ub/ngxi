import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCalculatorOneIcon],svg[icon-park-calculator-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:rect width="20" height="9" x="14" y="11" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:circle cx="17" cy="26" r="2" fill="#000"></svg:circle><svg:circle cx="17" cy="32" r="2" fill="#000"></svg:circle><svg:circle cx="17" cy="38" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="26" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="32" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="38" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="26" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="32" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="38" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkCalculatorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
